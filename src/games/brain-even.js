import getRandomNum from '../random.js';
import rulesOfTheGame from '../rulesOfTheGame.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const rangemin = 1;
const rangemax = 100;
const isEven = (num) => num % 2 === 0;

const game = () => {
  const number = getRandomNum(rangemin, rangemax);
  const correctanswer = isEven(number) ? 'yes' : 'no';
  const Quest = number;
  return [correctanswer, Quest];
  
};
const gameEven = () => {
  rulesOfTheGame(game, rule);
};

export default gameEven;
