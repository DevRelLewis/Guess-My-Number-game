'use strict';

// For again button
// Reset message
// Reset score
// Reset secret number
// Reset input guess
// Reset background
// Reset original box width

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Refactoring with functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const number = function () {
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').style.width = '30rem';
};

const body = function () {
  document.querySelector('body').style.backgroundColor = '#60b347';
};

const scoreContent = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No Number!';
    displayMessage('⛔️ No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    // document.querySelector('.number').textContent = secretNumber;
    number(secretNumber);

    //document.querySelector('body').style.backgroundColor = '#60b347';
    body('#60b347');

    // document.querySelector('.number').style.width = '30rem';
    number('30rem');

    if (score > highscore) {
      highscore = null;
      document.querySelector('.highscore').textContent = score;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;

      // document.querySelector('.score').textContent = score;
      scoreContent(score);
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');

      // document.querySelector('.score').textContent = 0;
      scoreContent(0);
    }
  }
  //   // When guess is to high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is to high
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.score').value = score;

  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = null;
});
