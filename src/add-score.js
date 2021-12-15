import showScore from "./show-score.js";
import postScore from "./post-score.js";

const addScore = () => {
  const inputName = document.querySelector('#player-name');
  const inputScore = document.querySelector('#player-score');
  const small = document.querySelector('small');
  if (inputName.value && inputScore.value) {
    postScore(inputName.value, inputScore.value)
    small.classList.add('invisible');
    const rank = 1;
    showScore(inputName.value, inputScore.value, rank);
    inputName.value = '';
    inputScore.value = '';
  } else {
    small.classList.remove('invisible');
  }
  return { name: inputName, score: inputScore };
};
export default addScore;