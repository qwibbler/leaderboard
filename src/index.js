// import './style.css';
import showAll from './show-all.js';
import addScore from './add-score.js';

const form = document.querySelector('form');
console.log(form);
const refresh = document.querySelector('.refresh');

window.onload = () => {
  showAll();
};

refresh.onclick = () => {
  showAll();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore()
  // setTimeout(handleSmall, 5000)
});


// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
//   method: 'POST',
//   body: JSON.stringify({ 
//     "name": "CryptoGram" 
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then(response => response.json())
//   .then(json => console.log(json));

// IcHXit5dDPeCw71PNKqn