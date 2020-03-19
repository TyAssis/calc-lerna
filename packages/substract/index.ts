import debug from 'debug';
const substractLog = debug('sub');

const substract = ([...numbers]) => {
  const lastIndex = numbers.indexOf(numbers.reverse()[0]);
  const result = numbers.reverse().reduce((cur, val, curIndex) => {
    return lastIndex !== curIndex ? cur - val : cur;
  }, numbers[0]);
  return substractLog('Substracting numbers:', result);
}

export { substract };