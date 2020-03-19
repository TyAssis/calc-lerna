import debug from 'debug';
import rl from 'readline-sync';
import { sum } from 'sum';
import { substract } from 'substract';

let numbers: number[] = [];
let option: string;
let operations: any = {};

const runnerLog = debug('runner');

const addOperations = (calculatorOperations: Function[]) => {
  calculatorOperations.forEach(operation => {
    operations[operation.name] = operation;
  })
};

const defaultOps = [sum, substract];
addOperations(defaultOps);

const loop = () => {
  option = rl.question(runnerLog('Choose a function: '));
  
  numbers = (rl.question(runnerLog('Put numbers: '))).split(' ').map(val => +val);

  try {
    const exec = operations[option];
    exec(numbers);
  } catch (err) {
    runnerLog('This calc cannot perform this operation')
  }

  console.log('\n\n');
  rl.question(runnerLog('Type for another calc (='));
  console.clear()
  loop();
};

export { loop, addOperations };