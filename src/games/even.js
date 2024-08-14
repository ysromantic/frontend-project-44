import startGame from '../index.js';
import getRandom from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getRound = () => {
  const question = getRandom(1, 20);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startEven = () => {
  startGame(description, getRound);
};

export default startEven;
