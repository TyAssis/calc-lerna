import debug from 'debug';
const sumLog = debug('sum');

const sum = ([...numbers]) => {
  const result = numbers.reduce((cur, val) => cur + val, 0);
  return sumLog('Summing numbers:', result);
}

export { sum };