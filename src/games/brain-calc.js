import getRandomNum from '../random.js';
import rulesOfTheGame from '../index.js';

const rule = 'What is the result of the expression?';
const rangemin = 1;
const rangemax = 100;
const operators = ['+', '-', '*'];
const getRandomOperator = (oper) => Math.floor(Math.random() * oper.length);
const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return false;
  }
};

const game = () => {
  const number1 = getRandomNum(rangemin, rangemax);
  const number2 = getRandomNum(rangemin, rangemax);
  const operator = operators[getRandomOperator(operators)];
  const Quest = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return [correctAnswer, Quest];
};
const GameCalc = () => {
  rulesOfTheGame(game, rule);
};

export default GameCalc;