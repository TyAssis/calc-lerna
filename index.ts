import debug from 'debug';
import { loop } from 'runner';

const calcLog = debug('calculator-v1');

calcLog('Let\'s math!');

setTimeout(() => {
  console.clear();
  loop();
}, 3000)