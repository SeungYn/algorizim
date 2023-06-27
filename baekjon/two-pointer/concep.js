const data = [3, 2, 4, 1, 2, 2, 1, 5];

let start = 0;
let end = 0;
let count = 0;
let sum = data[0];
let m = 5;
while (start <= end && end < data.length) {
  console.log(start, end, sum);
  if (sum <= m) {
    end++;
    sum += data[end];
  } else if (sum > m) {
    start++;
    sum -= data[start - 1];
  }
  if (sum === m) count++;
}

console.log(count);
