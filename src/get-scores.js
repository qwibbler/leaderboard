const getScores = () => {
  return fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IcHXit5dDPeCw71PNKqn/scores', {
    method: 'GET',
  })
  .then(response => response.json())
  .then(json => json.result);
}
export default getScores;