'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

const numberElement = document.querySelector('.number');
const bodyElement = document.querySelector('body');
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');
const guessElement = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');

checkBtn.addEventListener('click', () => {
  const guess = Number(guessElement.value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberElement.textContent = secretNumber;
    bodyElement.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreElement.textContent = 0;
    }
  }
});

const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scoreElement.textContent = score;
  numberElement.textContent = '?';
  guessElement.value = '';
  bodyElement.style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
});