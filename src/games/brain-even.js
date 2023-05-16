import getRandomNum from '../random.js';
import rulesOfTheGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const rangemin = 1;
const rangemax = 100;
const isEven = (num) => num % 2 === 0;

const game = () => {
  const number = getRandomNum(rangemin, rangemax);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const Quest = number;
  return [correctAnswer, Quest];
  
};
const gameEven = () => {
  rulesOfTheGame(game, rule);
};

export default gameEven;
