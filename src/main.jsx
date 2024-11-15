import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { FaPowerOff, FaVolumeUp, FaVolumeDown } from "react-icons/fa";

// DrumMachine class component
class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      volume: 0.5,
      display: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handlePowerSwitch = this.handlePowerSwitch.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.triggerAudio = this.triggerAudio.bind(this);
  }

  componentDidMount() {
    this.handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      this.triggerAudio(key);
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isOn !== prevState.isOn) {
      if (this.state.isOn) {
        document.addEventListener("keydown", this.handleKeyDown);
      } else {
        document.removeEventListener("keydown", this.handleKeyDown);
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  triggerAudio(key) {
    const parentDiv = document.getElementById(key); // Get the parent div by its id
    const audioElement = parentDiv ? parentDiv.querySelector("audio") : null; // Find the <audio> inside the div

    console.log("audio:", audioElement); // Log the audio element for debugging
    if (audioElement && this.state.isOn) {
      // Check if it's a valid audio element
      audioElement.currentTime = 0; // Reset to the start of the audio
      audioElement.volume = this.state.volume; // Set volume
      audioElement.play().catch((error) => {
        console.error(`Error playing audio for key ${key}:`, error);
      });
      this.setState({ display: keyToDescription[key] });
    } else {
      console.log(`No valid audio element found for ${key}`);
    }
  }

  handleClick(event) {
    const key = event.target.id;
    console.log(`Key clicked: ${key}`); // Debugging log
    this.triggerAudio(key);
  }

  handlePowerSwitch() {
    this.setState((prevState) => ({ isOn: !prevState.isOn }));
  }

  handleVolumeChange(e) {
    this.setState({ volume: e.target.value / 100 });
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div className="drum-pads">
          {drumPadKeys.map((key) => (
            <div
              key={key}
              id={key}
              className="drum-pad"
              onClick={this.handleClick}
            >
              {key}
              <audio
                id={key} // Make sure each audio has its own unique id matching the key
                className="clip"
                src={`https://s3.amazonaws.com/freecodecamp/drums/${keyToFileName[key]}.mp3`}
              ></audio>
            </div>
          ))}
        </div>

        <div className="controls">
          <div className="power-container" onClick={this.handlePowerSwitch}>
            <FaPowerOff
              className={`power-indicator ${this.state.isOn ? "active" : ""}`}
            />
            <span className="power-label">Power</span>
          </div>
          <div className="volume-container">
            <FaVolumeDown className="volume-icon" />
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.volume * 100}
              onChange={this.handleVolumeChange}
            />
            <FaVolumeUp className="volume-icon" />
          </div>
        </div>
      </div>
    );
  }
}

const drumPadKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const keyToFileName = {
  Q: "Heater-1",
  W: "Heater-2",
  E: "Heater-3",
  A: "Heater-4_1",
  S: "Heater-6",
  D: "Dsc_Oh",
  Z: "Kick_n_Hat",
  X: "RP4_KICK_1",
  C: "Cev_H2",
};

const keyToDescription = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open-HH",
  Z: "Kick-n'-Hat",
  X: "Kick",
  C: "Closed-HH",
};

//React Parent Component
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <DrumMachine />
      </>
    );
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
