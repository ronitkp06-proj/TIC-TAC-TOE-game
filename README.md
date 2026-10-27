# 🎮 Tic-Tac-Toe Game

A simple, interactive two-player Tic-Tac-Toe game built with **HTML, CSS, and JavaScript**. Take turns placing O and X on a 3×3 board, and see a winner announcement when a player completes a winning combination.

## ✨ Features

- Play a two-player game on the same device.
- Place **O** and **X** on a 3×3 interactive board.
- Automatically alternate turns, starting with **O**.
- Detect wins across all eight possible rows, columns, and diagonals.
- Display a congratulatory message when a player wins.
- Use **Reset Game** to clear the board and start again.
- Use **New Game** to begin another round after a win.

## 🛠️ Technologies Used

- **HTML5** — page structure and game board
- **CSS3** — styling and layout
- **JavaScript** — player turns, click handling, win detection, and game reset

## 🚀 Getting Started

No build tools, package installation, or API keys are required.

1. Download or clone this repository.
2. Make sure `index.html`, `style.css`, and `APP.js` are in the same folder.
3. Open `index.html` in your browser.
4. Click an empty square to start playing.

## 📁 Project Structure

```text
tic-tac-toe/
├── index.html     # Game interface
├── style.css      # Game styling
├── APP.js         # Player turns and win-detection logic
└── README.md      # Project documentation
```

## 🔎 How It Works

1. `index.html` creates the nine clickable squares and the game controls.
2. `APP.js` alternates between **O** and **X**, starting with O, and disables each square after a move.
3. After every move, JavaScript checks the eight winning patterns.
4. When a player wins, the game displays a winner message and disables the remaining squares.
5. **Reset Game** and **New Game** clear the board and start a new round with O.

## 🌐 Live Demo

A live demo can be added here after the GitHub Pages deployment is working and its URL has been verified as safe.

## 📸 Screenshot

Add a screenshot of the working game here when available.

## ⚠️ Notes

- This is a two-player game played locally on the same device; there is no computer opponent.
- The current code does not display a draw message when the board fills without a winner.
- The game does not track scores between rounds.
- The HTML file references `APP.js`, so keep that exact filename and capitalization when publishing.

## 👤 Author

Created by [ronitkp06-proj](https://github.com/ronitkp06-proj).
