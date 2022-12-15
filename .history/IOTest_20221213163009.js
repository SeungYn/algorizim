function solution(m, musicinfos) {
  var answer = '';
  const regs = ['C#', 'B#', 'D#', 'F#', 'G#', 'A#'];
  const replaces = ['Q', 'W', 'E', 'R', 'T', 'Y'];
  for (let i = 0; i < 6; i++) {
    a = a.replace(new RegExp(arr[i], 'g'), arr2[i]);
  }
  console.log(222);
  for (let i = 0; i <= musicinfos.length; i += 4) {
    console.log('a');
  }

  return answer;
}
/**
 * 샵이 붙여져 있는 것들은 치환 시킬 예정
 */
let a = 'CC#BCC#BCC#B#DD#F#G#A#';
const arr = ['C#', 'B#', 'D#', 'F#', 'G#', 'A#'];
const arr2 = ['Q', 'W', 'E', 'R', 'T', 'Y'];
for (let i = 0; i < 6; i++) {
  a = a.replace(new RegExp(arr[i], 'g'), arr2[i]);
}

solution('CC#BCC#BCC#BCC#B', [
  '03:00,03:30,FOO,CC#B',
  '04:00,04:08,BAR,CC#BCC#BCC#B',
]);
