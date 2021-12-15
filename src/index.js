// import './style.css';
import showAll from './show-all.js';
import addScore from './add-score.js';

const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');
let scores

// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IcHXit5dDPeCw71PNKqn/scores')
//   .then(response => response.json())
//   .then(json => console.log(json));

window.onload = () => {
  showAll();
};

refresh.onclick = () => {
  showAll();
};

submit.onclick = () => {
  addScore();
};

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


// const get = () => {
//   return fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IcHXit5dDPeCw71PNKqn/scores', {
//     method: 'GET',
//   })
//   .then(response => response.json())
//   .then(json => json.result);
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await get();
//   console.log(result);
//   // expected output: "resolved"
// }

// asyncCall();