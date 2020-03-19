import debug from 'debug';
const subtractLog = debug('sub');

const subtract = ([...numbers]) => {
  const lastIndex = numbers.indexOf(numbers.reverse()[0]);
  const result = numbers.reverse().reduce((cur, val, curIndex) => {
    return lastIndex !== curIndex ? cur - val : cur;
  }, numbers[0]);
  return subtractLog('Subtracting numbers:', result);
}

export { subtract };