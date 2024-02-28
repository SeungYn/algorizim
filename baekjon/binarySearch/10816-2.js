const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [n, m] = [+input[0], +input[2]];
const [list, targetList] = [
  input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b),
  input[3].split(' ').map(Number),
];
// console.log(list);
// console.log(
//   upperBound(list, 0, list.length, 10),
//   lowerBound(list, 0, list.length, 10)
// );
// console.log(123);

let res = [];
console.log(list);
for (const target of targetList) {
  res.push(
    upperBound(list, 0, list.length, target) -
      lowerBound(list, 0, list.length, target)
  );
}

console.log(res.join(' '));

// console.log(upperBound([1, 1, 1, 2, 3, 4, 4, 4, 4, 5], 0, 10, 1));
// console.log(lowerBound([1, 1, 1, 2, 3, 4, 4, 4, 4, 5], 0, 10, 1));
// console.log(upperBound([1, 1, 1, 2, 3, 4, 4, 4, 4, 5], 0, 10, 4));
// console.log(lowerBound([1, 1, 1, 2, 3, 4, 4, 4, 4, 5], 0, 10, 4));
// console.log(upperBound([4, 4, 4], 0, 3, 2));
console.log(upperBound([4, 4, 4, 4], 0, 4, 5));
console.log(lowerBound([4, 4, 4, 4], 0, 4, 5));

function upperBound(list, start, end, target) {
  let result = end;
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    const value = list[mid];
    //console.log(start, end, value);
    if (value > target) {
      end = mid - 1;
      result = mid;
    } else start = mid + 1;
  }

  return result;
}

function lowerBound(list, start, end, target) {
  let result = end;
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    const value = list[mid];

    if (value >= target) {
      end = mid - 1;
      result = mid;
    } else start = mid + 1;
  }

  return result;
}
