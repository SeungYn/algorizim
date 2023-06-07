
// readline 모듈 사용
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.output,
});

const data = [];

rl.on('line', (line) => {
  data.push(line);
}).on('close', () => {
  console.log(data);
});
