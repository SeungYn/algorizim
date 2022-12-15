function getTimeDifference(start, end) {
  const s = +start.split(':')[0] * 60 + +start.split(':')[1];
  const e = +end.split(':')[0] * 60 + +end.split(':')[1];
  console.log(e, s);
  console.log(e - s);
  return Math.abs(e - s);
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
    //if (end === '00:00') end = '24:00';
    //if (start === '00:00') start = '24:00';
    const time = getTimeDifference(start, end);
    console.log(m);
    music = connectMusic(time, replaceMusic(regs, replaces, music));
    console.log(music);
    if (music.includes(m)) {
      rightList.push([title, time]);
    }
  }

  if (rightList.length === 0) return '(None)';

  rightList.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    else if (a[1] < b[1]) return 1;
    else return 0;
  });
  console.log(rightList);
  return rightList[0][0];
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

console.log(
  solution('C#C', [
    '23:00,00:00,C#,C#C#CC#',
    '12:00,12:07,a,C#C#CC#',
    '12:00,12:06,b,C#C#CC#',
    '12:00,12:06,d,C#C#CC#',
  ])
);

// "ABC" ["12:00,12:06,HELLO,ABC#ABC#ABC"] "(None)"
// "ABC" ["12:00,12:10,HELLO,ABC#ABC#ABC"] "HELLO"
// "ABC" ["12:04,13:00,HELLO,ABC#ABC#ABC"] "HELLO"
// "C#C" ["12:00,12:06,HELLO,C#C#CC#"] "HELLO"

const arr3 = [[1, 2]];
arr3.sort((a, b) => {
  console.log(a);
});

function connectMusic2(time, music) {
  let temp = '';
  const q = parseInt(time / music.length);
  if (q >= 1) {
    temp = music.repeat(q);
  }
  temp += music.slice(0, time % music.length);

  return temp;
}
console.log(connectMusic2(6, '33343333'));
