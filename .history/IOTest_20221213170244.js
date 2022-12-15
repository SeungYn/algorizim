function getTimeDifference(start, end) {
  const s = +start.split(':')[0] * 60 + +start.split(':')[1];
  const e = +end.split(':')[0] * 60 + +end.split(':')[1];
  return e - s;
}

function replaceMusic(regs, replaces, music) {
  for (let i = 0; i < regs.length; i++) {
    music = music.replace(new RegExp(regs[i], 'g'), replaces[i]);
  }
  return music;
}

function connectMusic(time, music) {
  let temp = '';
  const q = parseInt(time / music.length);
  if (q >= 1) {
    temp = music.repeat(q);
  }
  temp += music.slice(0, time % music.length);

  return temp;
}

function solution(m, musicinfos) {
  var answer = '';
  const regs = ['C#', 'B#', 'D#', 'F#', 'G#', 'A#'];
  const replaces = ['Q', 'W', 'E', 'R', 'T', 'Y'];

  m = replaceMusic(regs, replaces, m);

  const rightList = [];

  for (let set of musicinfos) {
    let [start, end, title, music] = set.split(',');
    const time = getTimeDifference(start, end);

    music = connectMusic(time, replaceMusic(regs, replaces, music));
    if (music.includes(m)) {
      rightList.push(title);
    }
  }
  rightList.sort((a, b) => b - a);

  return rightList[0];
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
