# Memory Game App

Project developed with Angular version 17.3.0. The project consists of a game that offers a memory-based experience with user registration support, allowing players to have a unique score and adding an extra competitive experience. You can also play without registering a username, but this will leave you out of the scoring system, sounds, timer, and results.

## 📁 Project Structure

- `memory-game/`
  - `angular.json` - Angular CLI configuration.
  - `package.json` - dependencies and scripts.
  - `src/`
    - `app/`
      - `core/` - global services, guards, interceptors, and base components such as the header.
      - `features/` - functional modules organized by game area:
        - `game/` - game logic, cards, timer, and sound control.
        - `general/` - application startup components.
        - `register/` - user registration flow.
        - `result/` - results screen and final navigation.
        - `score/` - scores and statistics.
      - `shared/` - reusable components, constants, directives, and utilities.
    - `assets/` - images and sounds used in the game.

## 🧱 Architecture

The project follows a feature-based architecture with Angular:

- **Modular**: each key area of the game (registration, gameplay, results, and scores) is separated into its own route and logical module. By using standalone components, each piece works independently and in an encapsulated way, importing only the resources strictly required for its functionality.
- **Reusable components**: shared components are used for buttons, modals, and common UI elements.
- **Services**: business logic and game state are encapsulated in services inside core/services and in feature-specific services.
- **Route guards**: navigation is protected according to the game flow and user state. Guards were implemented to restrict access to the main game and results routes, preventing users from directly accessing them by typing the URL in the browser without following the required flow.
- **Routing**: route configuration is defined in files such as app.routes.ts and the routing files for each feature.

## 🚀 How to Run the Project

1. Open a terminal in the project root folder:
   ```bash
   cd "c:\Users\youruser\memory-game"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application in development mode:
   ```bash
   npm start
   ```

4. Then open the browser at:
   ```bash
   http://localhost:4200
   ```

## 🛠 Useful Commands

- `npm install` - installs dependencies.
- `npm start` - starts the development server.
- `npm run build` - generates the production build.

## 💡 Características principales

- Memory game with cards and match/mismatch logic.
- User registration before starting the game.
- Timer and sound control.
- Results and score screens.
- Modular and maintainable interface.