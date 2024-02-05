const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
for (let i = 1; i <= n; i++) {
  const data = input[i];
  const len = data.length;
  if (palindrome(data)) {
    console.log(0);
    continue;
  }
  let found = false;
  for (let i = 0; i < parseInt(len / 2); i++) {
    if (data[i] !== data[len - i - 1]) {
      if (palindrome(data.slice(0, i) + data.slice(i + 1, len))) found = true;
      if (palindrome(data.slice(0, len - i - 1) + data.slice(len - i, len)))
        found = true;
      break;
    }
  }
  if (found) console.log(1);
  else console.log(2);
}

function palindrome(x) {
  return x === x.split('').reverse().join('');
}
