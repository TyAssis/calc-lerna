import debug from 'debug';
import { loop, addOperations } from 'runner';
import { times } from 'times';

const calcLog = debug('calculator-v2');

calcLog('Let\'s math!');
addOperations([times]);

setTimeout(() => {
  console.clear();
  loop();
}, 3000)