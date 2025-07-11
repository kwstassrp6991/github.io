"use strict";
// SOS
//DOM MANIPULATION
//select an ELEMENT FROM HTML

//SOS HOW DOM MANIPULATION REALLY WORKS SOSs
// console.log(document.querySelector(".message").textContent);

// console.log((document.querySelector(".guess").value = 2));

// developing the app

// start the game
// variables SOS
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//functions SOS
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

// AGAIN BUTTON
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  let resColor = (document.querySelector("body").style.backgroundColor =
    "#222");
  // let resMessage = (document.querySelector(".message").textContent =
  //   "Start guessing...");
  myMessage("Start guessing...");
  // let resNumber = (document.querySelector(".number").textContent = "?");
  myNumber("?");
  // let resGuess = (document.querySelector(".guess").value = null);
  myGuess(null);
  // let resScore = (document.querySelector(".score").textContent = score);
  myScore(score);
});
// input check
document.querySelector(".check").addEventListener("click", function () {
  //event listener sthn klash pou theloume na patame
  let guess = Number(document.querySelector(".guess").value);

  //no input or falsy value
  if (!guess) {
    // document.querySelector(".message").textContent = "❌ no number!";
    myMessage("❌ no number!");

    //player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "✨correct Number! ✨";
    myMessage("✨correct Number! ✨");
    // document.querySelector(".number").textContent = secretNumber;
    myNumber(secretNumber);
    let body = document.querySelector("body");
    body.style.backgroundColor = "green";
    //highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //not valid number
  } else if (guess < 0 || guess > 20) {
    // document.querySelector(".message").textContent =
    //   "enter valid number (1 - 20 )";
    myMessage("enter valid number (1 - 20 )");
  }
  //bigger or lower than secret number
  else if (guess !== secretNumber) {
    if (score > 0) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "try smaller number 📉" : "try BIGGER number 📈";
      myMessage(
        guess > secretNumber ? "try smaller number 📉" : "try BIGGER number 📈"
      );
      score--;
      // document.querySelector(".score").textContent = score;
      myScore(score);
    } else {
      // document.querySelector(".message").textContent = "YOU LOSE ";
      myMessage("YOU LOSE");
    }
  }
});

// // bigger than secretNumber and score decrease
//    else if (guess > secretNumber) {
//     if (score > 0) {
//       document.querySelector(".message").textContent = "try smaller number 📉";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "YOU LOSE MADAFAKA";
//     }

// // lower than secretNumber and score decrease
//   } else if (guess < secretNumber) {
//     if (score > 0) {
//       document.querySelector(".message").textContent = "try BIGGER number 📈";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "YOU LOSE MADAFAKA";
//     }
//   }
// });

// ASKHSH 1
// document.querySelector(".change").addEventListener("click", function () {
//   document.querySelector(".alagh").textContent = "ALAKSE‼️";
//   let alagh = document.querySelector(".alagh");
//   alagh.style.color = "blue";
//   alagh.style.backgroundColor = "green";
// });
// ASKHSH 2
