import getScores from './get-scores.js';
import showScore from './show-score.js';

const clearBoard = () => {
  const board = document.querySelector('.scores');
  board.innerHTML = '';
}

const showAll = async () => {
  clearBoard()
  const scores = await getScores();
  let rank = 1;
  scores.forEach((score) => {
    showScore(score.name, score.score, rank);
    rank += 1;
  });
};
export default showAll;