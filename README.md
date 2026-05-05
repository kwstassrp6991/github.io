# 🎮 Guess the Number

A classic number guessing game built with **Vanilla JavaScript**, focusing on clean code, DOM manipulation, and the DRY principle.

---

## 🕹️ Live Demo

> Open `index.html` in your browser and start playing instantly — no setup needed.

---

## 📸 How It Works

```
🎯 The computer picks a secret number between 1 and 20
👆 You enter a guess and hit "Check!"
📉 Wrong guess → told if too high or too low → score drops by 1
✅ Correct guess → background turns green → high score updated
🔄 Hit "Again!" to reset and play another round
```

---

## ✨ Features

- Random number generation on every new game
- Real-time feedback (too high / too low)
- Score tracker that decreases with every wrong guess
- **High score** that persists across rounds
- Clean reset with the "Again!" button (high score is kept)

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Page structure |
| **CSS3** | Styling and visual feedback (background color change on win) |
| **Vanilla JavaScript** | Game logic, DOM manipulation, event listeners |

> No frameworks. No libraries. Pure JavaScript.

---

## 📁 Project Structure

```
guess-the-number-js/
│
├── game/
│   ├── index.html   # Game layout
│   ├── style.css    # Styling
│   └── script.js    # Game logic
│
└── README.md
```

---

## ⚙️ How to Run

```bash
# Clone the repository
git clone https://github.com/kwstassrp6991/guess-the-number-js.git

# Open the game
cd guess-the-number-js/game
open index.html   # or just double-click it
```

---

## 🧠 What I Focused On

The main goal was to write **clean, organized code** using the DRY (Don't Repeat Yourself) principle.

Instead of calling `document.querySelector()` everywhere, I created helper functions to handle all UI updates in one place:

```javascript
const displayMessage = (message) =>
  document.querySelector('.message').textContent = message;

const displayNumber = (number) =>
  document.querySelector('.number').textContent = number;

const displayScore = (score) =>
  document.querySelector('.score').textContent = score;
```

This kept the event listeners clean and the logic easy to follow.

---

## 🧠 What I Learned

| Concept | How I used it |
|---|---|
| **DOM Manipulation** | `querySelector`, reading input values, updating text content |
| **Event Listeners** | Handling button clicks for "Check!" and "Again!" |
| **DRY Principle** | Helper functions to avoid repeating selector logic |
| **Game State** | Tracking score, high score, and secret number across rounds |
| **CSS via JS** | Dynamically changing background color and element width on win |

---

## 🚀 Future Improvements

- [ ] Add difficulty levels (1–50, 1–100)
- [ ] Add animations on win/lose
- [ ] Save high score to localStorage so it persists on refresh
- [ ] Add a lives system instead of a score

---

*Built as part of my JavaScript learning journey — focused on writing clean, readable code from day one.*
