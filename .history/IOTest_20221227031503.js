const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');

const str1 = input.split('\n')[0];
const str2 = input.split('\n')[1];

const lcs = (a, b) => {
  const dp = Array.from({ length: a + 1 }, (v) => new Array(b + 1).fill(0));
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= b; j++) {
      if (str1[i] === str2[j]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  console.log(dp[a][b]);
};

lcs(str1.length, str2.length);
