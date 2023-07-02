'use strict';

let score = 20;
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;


function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function GuessMyNum() {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess);
  if (!guess) {
    displayMessage('No number!');
  } else if (guess == SecretNumber) {
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    displayMessage('Correct Number');
    score++;
    document.querySelector('.score').textContent = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess != SecretNumber) {
    document.querySelector('body').style.backgroundColor = '#D22B2B';
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > SecretNumber ? 'Too High' : 'Too Low';
      displayMessage(guess > SecretNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost!!');
      document.querySelector('.score').textContent = 0;
    }
  }
}

document.querySelector('.check').addEventListener('click', GuessMyNum);

// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

function restorGame() {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
}
document.querySelector('.again').addEventListener('click', restorGame);

// else if (guess > SecretNumber) {
//   document.querySelector('body').style.backgroundColor = '#D22B2B';
//   if (score > 1) {
//     displayMessage'Too High';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     displayMessage'You Lost!!';
//     document.querySelector('.score').textContent = 0;
//   }
// } else if (guess < SecretNumber) {
//   document.querySelector('body').style.backgroundColor = '#D22B2B';
//   if (score > 1) {
//     displayMessage'Too Low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     displayMessage'You Lost!!';
//     document.querySelector('.score').textContent = 0;
//   }
// }
