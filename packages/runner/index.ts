import debug from 'debug';
import rl from 'readline-sync';
import { sum } from 'sum';
import { subtract } from 'subtract';

let numbers: number[] = [];
let option: string;

const runnerLog = debug('runner');

const loop = () => {
  option = rl.question(runnerLog('Choose a function: '));
  
  numbers = (rl.question(runnerLog('Put numbers: '))).split(' ').map(val => +val);

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
  rl.question(runnerLog('Type for another calc (='));
  console.clear()
  loop();
};

export { loop };