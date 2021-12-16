import url from './url.js';

const getScores = async () => {
  const response = await fetch(url, {
    method: 'GET',
  });
  const scores = await response.json();
  return scores.result;
};
export default getScores;