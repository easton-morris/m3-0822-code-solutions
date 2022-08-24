const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((prev, next) => prev + next);
console.log("sum:", sum);

const product = numbers.reduce((prev, next) => prev * next);
console.log("product:", product);

const initial = 0;
const balance = account.reduce((prev, next) => {
  if (next.type === 'deposit') {
    return prev + next.amount;
  } else if (next.type === 'withdrawal') {
    return prev - next.amount;
  }
}, initial);
console.log('balance:', balance);

const composite = traits.reduce((prev, next) => {
  return {...prev, ...next}
}
, {});
console.log('composite:', composite);
