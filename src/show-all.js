import showScore from './show-score.js';

const showAll = (scores) => {
  const board = document.querySelector('.scores');
  board.innerHTML = '';
  let rank = 1;
  scores.forEach((score) => {
    showScore(score.name, score.score, rank);
    rank += 1;
  });
};
export default showAll;