import getScores from './get-scores.js';
import showScore from './show-score.js';

async function showAll() {
  const board = document.querySelector('.scores');
  board.innerHTML = '';
  let rank = 1;
  const scores = await getScores();
  scores.forEach((score) => {
    showScore(score.name, score.score, rank);
    rank += 1;
  });
};
export default showAll;