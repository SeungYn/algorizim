const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
let [N, K] = input[0].split(' ').map(Number);
const basket = Array.from({ length: K + 1 }, () => 0);

let index = 1;
let currentCount = 0;

const sumOfSequence = (K * (K + 1)) / 2;

if (sumOfSequence > N) console.log(-1);
else if ((N - sumOfSequence) % K === 0) console.log(K - 1);
else console.log(K);

//  2 3 5
// 10 3
// 1 2 3
// 2 3 5
// while (index <= K) {

// 	// 현개 공의 갯수가 채워야할 공의 갯수보다 작으면 못만듬
// 	if (N < currentCount) {
// 		break;
// 	}

// 	basket[index] = currentCount;

// }

//while을 index <= k로 하려고 했는데 currentCount를 1씩증가하고 조건문 걸어주려하니깐
// 안됨 복잡해짐

//공을수 1개씩 증가하게 담되, k개의 바구니에 빠짐없이 담아야함
// 5 3
// 1 2 3 으로 담아야하는데 공의 갯수가 부족하여 불가능 최소 6개여야함 -1 반환
// 6 3
// 1 2 3 하나씩 증가가 성립 가장 많이 담은 바구니는 가장 끝에 있고 적게 담은 바구니는 첫번째가
// 자연스럽게 성립

// 7
// 1 2 4
// 8
// 1 3 4
// 9
// 1
// 9 3
// 2 3 4
// 6 3
// 1 2 3
// 10 3
// 1 3 6
