import postScore from './post-score.js';
import getScores from './get-scores.js';
import showScore from './show-score.js';

const addScore = async () => {
  const inputName = document.querySelector('#player-name');
  const inputScore = document.querySelector('#player-score');
  const small = document.querySelector('small');

  const message = await postScore(inputName.value, parseInt(inputScore.value, 10));
  const scores = await getScores();
  const rank = scores.length;

  if (message.result) {
    showScore(inputName.value, inputScore.value, rank);
    small.innerHTML = message.result;
    small.style.backgroundColor = 'lightgreen';
  } else {
    small.innerHTML = message.message;
    small.style.backgroundColor = 'red';
  }

  inputName.value = '';
  inputScore.value = '';
  setTimeout(() => {
    small.classList.add('invisible');
  }, 3000);

  return { name: inputName, score: inputScore };
};
export default addScore;
