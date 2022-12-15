function solution(m, musicinfos) {
  var answer = '';
  const regs = ['C#', 'B#', 'D#', 'F#', 'G#', 'A#'];
  const replaces = ['Q', 'W', 'E', 'R', 'T', 'Y'];
  for (let i = 0; i < 6; i++) {
    a = a.replace(new RegExp(arr[i], 'g'), arr2[i]);
  }

  for (let set of musicinfos) {
    let [start, end, title, music] = set.split(',');

    start = +start.split(':')[0] * 60 + +start.split(':')[1];
    end = +end.split(':')[0] * 60 + +end.split(':')[1];
    const time = end - start;

    break;
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
