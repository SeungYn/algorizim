const fs = require('fs');
const path =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(path).toString().split('\n');
const n = +input[0];
const list = input.slice(1);

let set;
let flag;
let count = 0;
list.forEach((str) => {
  set = new Set();
  flag = true;
  set.add(str[0]);

  for (let i = 1; i < str.length; i++) {
    if (!set.has(str[i])) {
      set.add(str[i]);
    } else {
      if (str[i - 1] === str[i]) continue;
      flag = false;
      break;
    }
  }

  if (flag) count++;
});

console.log(count);
