import url from './url.js';

const postScore = async (user, score) => {
  const response = await fetch(url, {
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
