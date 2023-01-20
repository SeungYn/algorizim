const fs = require('fs');
const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const form = input[0];

function recursion(form, subFlag) {
  const subPosition = form.indexOf('-');
  if (!(subPosition >= 0)) {
    form = form.split('+').reduce((p, c) => p + Number(c), 0);
    return subFlag ? form * -1 : form;
  }

  let front = form
    .slice(0, subPosition)
    .split('+')
    .reduce((p, c) => p + Number(c), 0);
  if (subFlag) front *= -1;
  let rest = form.slice(subPosition + 1);
  console.log(front, rest);
  return front + recursion(rest, true);
}

console.log(recursion(form, false));
