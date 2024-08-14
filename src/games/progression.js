import startGame from '../index.js';
import getRandom from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getRound = () => {
  const start = getRandom(1, 20);
  const step = getRandom(1, 5);
  const length = getRandom(5, 10);

  const progression = getProgression(start, step, length);
  const hiddenIndex = getRandom(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startProgression = () => {
  startGame(description, getRound);
};

export default startProgression;
