// import './style.css';
import showAll from './show-all.js';
import addScore from './add-score.js';

const form = document.querySelector('form');
const refresh = document.querySelector('.refresh');

window.onload = showAll;
refresh.onclick = showAll;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore()
});
