import debug from 'debug';
import rl from 'readline-sync';
import { sum } from 'sum';
import { subtract } from 'subtract';


const calcLog = debug('calculator');
let numbers: number[] = [];
let option: string;

calcLog('Let\'s math!');
console.clear();

const loop = () => {
  option = rl.question(calcLog('Choose a function: '));
  
  numbers = (rl.question(calcLog('Put numbers: '))).split(' ').map(val => +val);

  switch (option) {
    case 'sum':
      sum(numbers);
      break;
    case 'sub':
      subtract(numbers);
      break;
    default:
      break;
  }

  console.log('\n\n');
  rl.question(calcLog('Type for another calc (='));
  console.clear()
  loop();
};

loop();