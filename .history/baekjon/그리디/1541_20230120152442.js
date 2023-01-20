const fs = require('fs');
const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const form = input[0] + '';

function recursion(form) {
  const subPosition = form.indexOf('-');
  if (!(subPosition >= 0)) return parseInt(eval(form));

  const front = parseInt(eval(form.slice(0, subPosition)));
  let rest = form.slice(subPosition + 1);
  return front - recursion(rest);
}

console.log(recursion(form));
