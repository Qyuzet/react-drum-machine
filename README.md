# Drum Machine

A Drum Machine built using ReactJS that allows users to play different drum sounds by clicking on buttons or pressing corresponding keys on the keyboard. It features an interactive user interface with volume control and a power switch. [TRY NOW!](https://codepen.io/Riki-A/pen/PoMgwMJ)

## Features

- **Interactive Drum Pads**: 9 drum pads that trigger different sounds when clicked or when the corresponding key is pressed.
- **Power Toggle**: Turn the drum machine on or off with a power button.
- **Volume Control**: Adjust the volume of the drum machine using a range input slider.
- **Keyboard Support**: Play the drum sounds by pressing the keys `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, and `C`.

## Technologies Used

- **ReactJS**: For building the user interface and handling state management.
- **React Icons**: For power and volume icons.
- **CSS**: Custom styles to create an interactive and responsive layout.
- **Audio**: Uses audio files from FreeCodeCamp for the drum sounds.

## How to Run

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/Qyuzet/react-drum-machine.git
    ```

2. Navigate into the project directory:
    ```bash
    cd drum-machine
    ```

3. Install the necessary dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

    This will open the app in your default browser, and you'll be able to interact with the drum machine.

## Demo

You can view a live demo of this project [here](https://codepen.io/Riki-A/pen/PoMgwMJ).


## Project Structure

- `src/`: Contains all the JavaScript files and components for the app.
- `public/`: Contains static files like `index.html`.
- `index.css`: Custom CSS for styling the app.

## Key Features

- **Drum Pads**: Each drum pad corresponds to a different key and sound. The key mappings are as follows:
    - `Q` - Heater 1
    - `W` - Heater 2
    - `E` - Heater 3
    - `A` - Heater 4
    - `S` - Clap
    - `D` - Open-HH
    - `Z` - Kick-n'-Hat
    - `X` - Kick
    - `C` - Closed-HH

- **Power Control**: The power switch toggles the entire drum machine, turning off the sounds and the ability to interact.
  
- **Volume Control**: You can adjust the sound of the drum pads using a slider. The volume is adjustable between 0 and 100.

## Future Improvements

- Add more drum sounds and keys for more variety.
- Implement sound effects such as reverb or delay.
- Add mobile-friendly controls or a touchscreen feature.

## Contributing

Feel free to fork this repository and submit pull requests. If you find a bug or have suggestions, please create an issue, and I will review it as soon as possible.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
