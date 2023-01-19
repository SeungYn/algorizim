const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

let [n, k] = [...input[0].split(' ')].map((i) => +i);
const data = input.slice(1).map((i) => +i);
let index = n - 1;

let share;
for (let i = index; i >= 0; i--){
	if (data[i] > k) continue;
	share = Math.floor(k / data[i]);
	k % = (share * data[i]);
}

