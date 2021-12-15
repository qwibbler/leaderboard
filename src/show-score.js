const showScore = (name, score, rank) => {
  const board = document.querySelector('.scores');
  board.innerHTML += `
  <li>
    ${rank}.&emsp;${name}:&emsp;${score}
  </li>
  `;
};
export default showScore;