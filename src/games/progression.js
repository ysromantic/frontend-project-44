import { game, getRandom } from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (startNum, step, progressionLength) => {
  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(startNum + i * step);
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const startNum = getRandom(1, 20);
  const step = getRandom(1, 5);
  const progressionLength = getRandom(5, 10);

  const result = getProgression(startNum, step, progressionLength);

  const hiddenIndex = getRandom(0, progressionLength - 1);

  const correctAnswer = String(result[hiddenIndex]);

  result[hiddenIndex] = '..';

  const question = result.join(' ');

  return [question, correctAnswer];
};

const progressionGame = () => {
  game(description, getQuestionAndAnswer);
};

export default progressionGame;
