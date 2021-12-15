const showScore = (user, score, rank) => {
  const board = document.querySelector('.scores');
  board.innerHTML += `
  <li>
    ${rank}.&emsp;${user}:&emsp;${score}
  </li>
  `;
};
export default showScore;