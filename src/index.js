import readlineSync from 'readline-sync';

const countRound = 3;

export const game = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < countRound; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === countRound - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export const getRandom = (min, max) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  return randomNum;
};
