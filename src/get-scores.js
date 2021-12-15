const getScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IcHXit5dDPeCw71PNKqn/scores', {
    method: 'GET',
  });
  const scores = await response.json();
  return scores.result;
};
export default getScores;