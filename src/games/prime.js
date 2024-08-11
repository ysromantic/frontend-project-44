import startGame from '../index.js';
import getRandom from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let divider = 2; divider <= Math.sqrt(num); divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const question = getRandom(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrime = () => {
  startGame(description, getRound);
};

export default startPrime;
