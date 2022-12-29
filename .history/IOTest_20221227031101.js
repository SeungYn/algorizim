const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');

const str1 = input.split('\n')[0];
const str2 = input.split('\n')[1];

const lcs = (a, b) => {
  const dp = Array.from({ length: a + 1 }, () => new Array(b + 1).fill(0));
  console.log(dp);
};
