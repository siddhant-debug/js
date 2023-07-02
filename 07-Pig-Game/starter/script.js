'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnroll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0el = document.getElementById('current--0');
const current1el = document.getElementById('current--1');

score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');


const scores = [0 , 0];
let activePlayer = 0;
let currentScore = 0;


btnroll.addEventListener('click', function () {
  let diceValue = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${diceValue}.png`;

  if (diceValue != 1) {
    //add dice to current score
    currentScore = currentScore + diceValue;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    //switch to next player
    activePlayer = activePlayer === 0? 1 : 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore=0;
    
  }
});
