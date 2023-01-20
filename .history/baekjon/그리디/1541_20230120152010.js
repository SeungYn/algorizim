const fs = require('fs');
const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const form = input[0] + '';

function recursion(form) {
  const subPosition = form.indexOf('-');
  if (!(subPosition >= 0)) return eval(form);

  const front = form.slice(0, subPosition);
  let rest = form.slice(subPosition + 1);
  console.log(front, rest);
  return front - recursion(rest);
}

console.log(recursion(form));
console.log(eval(3));
