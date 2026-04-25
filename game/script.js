"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


const myMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const myNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const myScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const myGuess = function (guess) {
  document.querySelector(".guess").value = guess;
};


document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  let resColor = (document.querySelector("body").style.backgroundColor =
    "#222");

  myMessage("Start guessing...");

  myNumber("?");

  myGuess(null);

  myScore(score);
});

document.querySelector(".check").addEventListener("click", function () {

  let guess = Number(document.querySelector(".guess").value);


  if (!guess) {

    myMessage("❌ no number!");


  } else if (guess === secretNumber) {

    myMessage("✨correct Number! ✨");

    myNumber(secretNumber);
    let body = document.querySelector("body");
    body.style.backgroundColor = "green";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }


  } else if (guess < 0 || guess > 20) {


    myMessage("enter valid number (1 - 20 )");
  }

  else if (guess !== secretNumber) {
    if (score > 0) {
     
      myMessage(
        guess > secretNumber ? "try smaller number 📉" : "try BIGGER number 📈"
      );
      score--;

      myScore(score);
    } else {

      myMessage("YOU LOSE");
    }
  }
});
