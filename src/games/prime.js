import { game, getRandom } from '../index.js';

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

const getQuestionAndAnswer = () => {
  const question = getRandom(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export const primeGame = () => {
  game(description, getQuestionAndAnswer);
};
