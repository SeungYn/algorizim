const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
const visited = Array.from({ length: N }, () => false);
const result = [];
function(depth) {
	if (depth === M) {
		
	}
}
