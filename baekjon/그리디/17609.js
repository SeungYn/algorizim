const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];

for (let i = 1; i <= n; i++) {
  const str = input[i];
  let strLen = str.length - 1;
  let start = 0;
  let flag = true;

  while (start < strLen) {
    if (str[start] === str[strLen]) {
      start++;
      strLen--;
    } else {
      if (
        isPalindromeTwoPoint(str, start + 1, strLen) ||
        isPalindromeTwoPoint(str, start, strLen - 1)
      ) {
        console.log(1);
        flag = false;

        break;
      } else {
        flag = false;
        console.log(2);
        break;
      }
    }
  }

  if (flag) {
    console.log(0);
  }
}

function isPalindromeTwoPoint(str, left, right) {
  while (left < right) {
    //if (str === 'summuus') console.log(left, right, str);
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }
  return true;
}

function isPalindrome(x) {
  return x === x.split('').reverse().join('');
}
