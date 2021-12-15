import showScore from "./show-score.js";
import postScore from "./post-score.js";

const addScore = async () => {
  const inputName = document.querySelector('#player-name');
  const inputScore = document.querySelector('#player-score');
  const small = document.querySelector('small');
  const message = await postScore(inputName.value, inputScore.value);

  if (message.result) {
    showScore(inputName.value, inputScore.value, 1);
    small.innerHTML = message.result;
    small.style.backgroundColor = 'lightgreen';
  } else {
    small.innerHTML = message.message;
    small.style.backgroundColor = 'red';
  }

  inputName.value = '';
  inputScore.value = '';
  setTimeout(() => {
    small.classList.add("invisible")
  }, 5000);

  return { name: inputName, score: inputScore };
};
export default addScore;
