🎮 Guess My Number
This is a simple "Guess the Number" game I built while diving deeper into JavaScript DOM Manipulation. It’s a classic project, but I focused on making the code clean and practicing the DRY (Don't Repeat Yourself) principle by using helper functions.

🕹️ How it works
The logic is pretty straightforward:

The computer picks a random number between 1 and 20.

You enter a guess and hit the "Check!" button.

If you're wrong, the game tells you if you're too high or too low, and your score drops by 1.

If you're right, the background turns green, the secret number is revealed, and your high score gets updated if you beat it.

Hit the "Again!" button to reset everything (except the high score, obviously) and go for another round.

🛠️ What I used
HTML5 & CSS3 for the layout and look.

Vanilla JavaScript: No frameworks here. I used querySelector, event listeners, and basic logic to make it interactive.

🧠 What I focused on
I wanted the code to be organized, so instead of repeating document.querySelector everywhere, I created a few helper functions to handle UI updates:

JavaScript
const myMessage = (message) => document.querySelector(".message").textContent = message;
const myNumber = (number) => document.querySelector(".number").textContent = number;
// ...you get the idea.
This made the event listeners much cleaner and easier to read.

🚀 How to run it
Clone this repo or just download the files.

Open index.html in your browser.

Start guessing!

Feel free to mess around with the code—maybe change the range from 1-20 to 1-100 if you're feeling lucky. 😉
