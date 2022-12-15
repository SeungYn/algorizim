function solution(m, musicinfos) {
  var answer = '';

  return answer;
}
/**
 * 샵이 붙여져 있는 것들은 치환 시킬 예정
 */
let a = 'CC#BCC#BCC#B#DD#F#G#A#';
const arr = ['C#', 'B#', 'D#', 'F#', 'G#', 'A#'];

for (let c of arr) {
  console.log(a.matchAll(`/${c}/`));
}
