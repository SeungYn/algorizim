const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const wallet = +input[0];
const list = input[1].split(' ').map(Number);

// 준현이 경우 살수 있는 만큼 사고 마지막날 가격으로 계산
let aWallet = [wallet, 0];
for (const price of list) {
  if (price <= aWallet[0]) {
    aWallet[1] += parseInt(aWallet[0] / price);
    aWallet[0] = aWallet[0] % price;
  }
}

let bWallet = [wallet, 0];
let direct = 'UP';
let stack = [];
let upCount = 0;
let downCount = 0;

/**
 * 스택을 사용했던 이유가 상승세 하락세 확인과 3개를 확인해주기 위한 수단이었는데
 * upCount, downCount를 활용하고 인덱스를 1부터 시작하여 좀 더 간략하게 작성가능
 */

for (let i = 1; i < list.length; i++) {
  if (list[i] > list[i - 1]) {
    upCount++;
    downCount = 0;
  } else if (list[i] < list[i - 1]) {
    downCount++;
    upCount = 0;
  } else {
    upCount = 0;
    downCount = 0;
  }

  if (downCount >= 3) {
    bWallet[1] += parseInt(bWallet[0] / list[i]);
    bWallet[0] = bWallet[0] % list[i];
  } else if (upCount >= 3) {
    bWallet[0] += list[i] * bWallet[1];
  }
}

console.log(
  calcWallet(aWallet) > calcWallet(bWallet)
    ? 'BNP'
    : calcWallet(aWallet) === calcWallet(bWallet)
    ? 'SAMESAME'
    : 'TIMING'
);

function calcWallet(wallet) {
  return wallet[0] + wallet[1] * list.at(-1);
}

// 원래 작성한 코드
// const fs = require('fs');
// const PATH =
//   process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

// const input = fs.readFileSync(PATH).toString().trim().split('\n');

// const wallet = +input[0];
// const list = input[1].split(' ').map(Number);

// // 준현이 경우 살수 있는 만큼 사고 마지막날 가격으로 계산
// let aWallet = [wallet, 0];
// for (const price of list) {
//   if (price <= aWallet[0]) {
//     aWallet[1] += parseInt(aWallet[0] / price);
//     aWallet[0] = aWallet[0] % price;
//   }
// }

// let bWallet = [wallet, 0];
// let direct = 'UP';
// let stack = [];
// for (const price of list) {
//   // 비어 있으면 스택에 쌓음
//   if (stack.length === 0) {
//     stack.push(price);
//     continue;
//   }

//   // 스택에 쌓기 전 맨 위와 현재 가격 비교
//   const prevPrice = stack.at(-1);

//   if (prevPrice < price) {
//     // 상승세 일 때
//     if (direct === undefined || direct === 'UP') {
//       direct = 'UP';
//       stack.push(price);
//     } else if (direct === 'DOWN') {
//       stack = [price];
//       direct = 'UP';
//     }
//   } else if (prevPrice > price) {
//     if (direct === undefined || direct === 'DOWN') {
//       direct = 'DOWN';
//       stack.push(price);
//     } else if (direct === 'UP') {
//       stack = [price];
//       direct = 'DOWN';
//     }
//   } else if (prevPrice === price) {
//     stack = [price];
//     direct = undefined;
//   }

//   if (stack.length >= 3) {
//     if (direct === 'UP') {
//       bWallet[0] += price * bWallet[1];
//     } else {
//       bWallet[1] += parseInt(bWallet[0] / price);
//       bWallet[0] = bWallet[0] % price;
//     }
//   }

//   // 기존 스택에 방향과 같으면 넣고 아니면 초기화 해서 넣음 그리고 방향 명시
// }
// console.log(
//   calcWallet(aWallet) > calcWallet(bWallet)
//     ? 'BNP'
//     : calcWallet(aWallet) === calcWallet(bWallet)
//     ? 'SAMESAME'
//     : 'TIMING'
// );

// function calcWallet(wallet) {
//   return wallet[0] + wallet[1] * list.at(-1);
// }
