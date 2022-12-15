function solution(m, musicinfos) {
  var answer = '';
  const regs = ['C#', 'B#', 'D#', 'F#', 'G#', 'A#'];
  const replaces = ['Q', 'W', 'E', 'R', 'T', 'Y'];
  for (let i = 0; i < 6; i++) {
    a = a.replace(new RegExp(arr[i], 'g'), arr2[i]);
  }

  for (let i = 0; i <= musicinfos.length - 4; i += 4) {
    let [start, end, title, music] = musicinfos.slice(i, i + 4);
    start = +start.split(':')[0] * 60 + start.split(':')[1];
    end = +end.split(':')[0] * 60 + end.split(':')[1];
    console.log(end - start);
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

console.log(a);
