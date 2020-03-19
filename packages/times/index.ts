import debug from 'debug';
const timesLog = debug('times');

const times = ([...numbers]) => {
  const lastIndex = numbers.indexOf(numbers.reverse()[0]);
  const result = numbers.reverse().reduce((cur, val, curIndex) => {
    return lastIndex !== curIndex ? cur * val : cur;
  }, numbers[0]);
  return timesLog('Multiplying numbers:', result);
}

export { times };