console.log(2 ** 53 + 23423423);
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991); // 9000조
// 자바스크립트는 대략 9000조까지 나타냄

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const data = [];

rl.on('line', (d) => {
  console.log(d);
  data.push(d);
}).on('close', () => {
  console.log(data);
  process.exit();
});
