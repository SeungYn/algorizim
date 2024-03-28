const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = input.slice(1);

const opcodeMap = {
  ADD: '00000',
  ADDC: '00001',
  SUB: '00010',
  SUBC: '00011',
  MOV: '00100',
  MOVC: '00101',
  AND: '00110',
  ANDC: '00111',
  OR: '01000',
  ORC: '01001',
  NOT: '01010',
  MULT: '01100',
  MULTC: '01101',
  LSFTL: '01110',
  LSFTLC: '01111',
  LSFTR: '10000',
  LSFTRC: '10001',
  ASFTR: '10010',
  ASFTRC: '10011',
  RL: '10100',
  RLC: '10101',
  RR: '10110',
  RRC: '10111',
};
let result = '';
for (let i = 0; i < list.length; i++) {
  const [op, rD, rA, rB] = list[i].split(' ');
  let last =
    opcodeMap[op][4] === '0'
      ? Number(rB)
          .toString(2) //
          .padStart(3, '0') + '0'
      : Number(rB)
          .toString(2) //
          .padStart(4, '0');
  let res;
  console.log(
    opcodeMap[op] +
      0 +
      Number(rD).toString(2).padStart(3, '0') +
      Number(rA).toString(2).padStart(3, '0') +
      last
  );
  // console.log(res);
  // console.log(last, rB, Number(rB).toString(2));
  // ('0111001000101000');
  // console.log(op.at(-1) === '0', op);
}

/**
 * rA는 opcde에 따라 사용하지 않을 수 있음
 * rA 와 rB 또는 #C를 opcode에 해당하는 연산을 한 후 rD에 저장
 *
 *
 * 문자열 파싱해서 해당 코드 알아내기
 * 0 붙이기
 * 2번쨰 값을 2진수로 표현
 * opcaode 문자열에대한 코드 객체로 저장
 * opcode 마지막 값이 0 여부에 따라 끝에 0 추가(0이면 이진수로 3자리로 만듬 아니면 이진수 4자리)
 */
