// import './style.css';
import show from './show.js'
import addScore from "./add-score.js";

const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');
const scores = [
  {
    name: 'name',
    score: 100,
  },
  {
    name: 'name',
    score: 90,
  },
  {
    name: 'name',
    score: 80,
  },
  {
    name: 'name',
    score: 70,
  },
  {
    name: 'name',
    score: 60,
  },
  {
    name: 'name',
    score: 50,
  },
]

window.onload = () => {
  show(scores);
}

refresh.onclick = () => {
  show(scores);
}

submit.onclick = () => {
  addScore(scores);
}