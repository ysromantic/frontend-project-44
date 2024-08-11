import startGame from '../index.js';
import getRandom from '../utils.js';

const description = 'Find the greatest common divisor of given numbers';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

const getRound = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGCD(num1, num2));
  return [question, correctAnswer];
};

const startGcd = () => {
  startGame(description, getRound);
};

export default startGcd;
