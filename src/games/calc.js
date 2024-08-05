import { game, getRandom } from '../index.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
    }
};

const getQuestionAndAnswer = () => {
    const num1 = getRandom(1, 10);
    const num2 = getRandom(1, 10);
    const operator = operations[getRandom(0, operations.length)];

    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculate(num1, num2, operator).toString();

    return [question, correctAnswer];
};

export const calc = () => {
    game(description, getQuestionAndAnswer);
};