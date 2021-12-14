// import './style.css';
import { show } from './show.js'

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