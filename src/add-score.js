function showScore(name, score, rank) {
  const board = document.querySelector('.scores');
  board.innerHTML += `
  <li class="${rank % 2 === 0 ? "even" : "odd"}">
    ${rank}.&emsp;${name}:&emsp;${score}
  </li>
  `;
}

function addScore(scores) {
  const inputName = document.querySelector('#player-name')
  const inputScore = document.querySelector('#player-score')
  const small = document.querySelector('small');
  if (inputName.value && inputScore.value) {
    small.classList.add('invisible');
    scores.push({ name: inputName.value, score: inputScore.value });
    const rank = scores.length;
    showScore(inputName.value, inputScore.value, rank);
    inputName.value = '';
    inputScore.value = '';
  } else {
    small.classList.remove('invisible');
  }
  return { name: inputName, score: inputScore };
}
export default addScore;