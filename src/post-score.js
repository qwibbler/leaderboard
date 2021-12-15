const postScore = async (user, score) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IcHXit5dDPeCw71PNKqn/scores', {
    method: 'POST',
    body: JSON.stringify(
      {
        user,
        score,
      },
    ),
    headers: { 'Content-Type': 'application/json' },
  });
  const message = await response.json();
  return message;
};
export default postScore;
