const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const list = input[0].split(' ');
const common = list[0];
// for (let i = 1; i < list.length; i++) {
//   const reg = new RegExp(/[a-zA-Z]+/g);
//   const restReg = new RegExp(/[^a-zA-Z]+/g);
//   const word = list[i].slice(0, -1);
//   const value = word.match(reg);
//   const rest = word.match(restReg) ? [...word.match(restReg)[0]] : null;
//   const newRest = [];
//   if (rest) {
//     while (rest.length) {
//       const w = rest.pop();
//       if (w === ']') {
//         newRest.push('[');
//       } else if (w === '[') {
//         newRest.push(']');
//       } else {
//         newRest.push(w);
//       }
//     }
//   }

//   console.log(common + newRest.join('') + ' ' + value[0] + ';');
// }

for (let i = 1; i < list.length; i++) {
  let value = '';
  let rest = '';

  for (let j = list[i].length - 1; j >= 0; j--) {
    switch (list[i][j]) {
      case ']':
        rest += '[';
        break;
      case '[':
        rest += ']';
        break;
      case '*':
        rest += '*';
        break;
      case '&':
        rest += '&';
        break;
      default:
        if (list[i][j] === ',' || list[i][j] === ';') break;
        value += list[i][j];
    }
  }

  console.log(common + rest + ' ' + [...value].reverse().join('') + ';');
}
