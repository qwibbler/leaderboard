const showAll = (scores) => {
  const board = document.querySelector('.scores');
  board.innerHTML = '';
  let rank = 1;
  scores.forEach((score) => {
    board.innerHTML += `
    <li>
      ${rank}.&emsp;${score.name}:&emsp;${score.score}
    </li>
    `;
    rank += 1;
  });
};
export default showAll;