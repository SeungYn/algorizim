const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
console.log(input);

const nodeCnt = +input[0];
const nodePairCnt = +input[1];
const nodeList = Array.from({ length: nodeCnt + 1 }, (v, i) => i);
console.log(nodeList);
