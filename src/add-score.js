import showScore from "./show-score.js";
import postScore from "./post-score.js";

const handleSmall = () => {
  const small = document.querySelector('small');
  small.classList.add("invisible")
}

const addScore = async () => {
  const inputName = document.querySelector('#player-name');
  const inputScore = document.querySelector('#player-score');
  const small = document.querySelector('small');
  const message = await postScore(inputName.value, inputScore.value);
  small.textContent = message[0];
  if (message.result) {
    showScore(inputName.value, inputScore.value, 1);
    small.style.backgroundColor = 'green';
  } else {
    small.style.backgroundColor = 'red';
  }

  inputName.value = '';
  inputScore.value = '';
  return { name: inputName, score: inputScore };
};
export default addScore;
