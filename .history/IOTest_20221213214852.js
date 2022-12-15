function getTimeDifference(start, end) {
  // const s = +start.split(':')[0] * 60 + +start.split(':')[1];
  // const e = +end.split(':')[0] * 60 + +end.split(':')[1];
  // console.log(e, s);
  // console.log(Math.abs(e - s));
  // return Math.abs(e - s);
  let time1 = start.split(':');
  let time2 = end.split(':');
  let difftime = (time2[0] - time1[0]) * 60 + (time2[1] - time1[1]);
  return difftime;
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
  const regs = ['C#', 'B#', 'D#', 'F#', 'G#', 'A#'];
  const replaces = ['Q', 'W', 'E', 'R', 'T', 'Y'];
  console.log(m);
  m = replaceMusic(regs, replaces, m);
  console.log(m);
  const rightList = [];

  for (let set of musicinfos) {
    let [start, end, title, music] = set.split(',');
    // if (end === '00:00') end = '24:00';
    // if (start === '00:00') start = '24:00';

    const time = getTimeDifference(start, end);
    console.log(music);
    music = connectMusic(time, replaceMusic(regs, replaces, music));
    console.log(time);
    console.log('music', music);
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

console.log(solution('C', ['13:00,13:01,WORLD,F']));
// function getTimeDifference2(start, end) {
//   const s = +start.split(':')[0] * 60 + +start.split(':')[1];
//   const e = +end.split(':')[0] * 60 + +end.split(':')[1];
//   console.log(e, s);
//   console.log(e - s);
//   return Math.abs(e - s);
// }
// getTimeDifference2('07:20', '00:00');
// "ABC" ["12:00,12:06,HELLO,ABC#ABC#ABC"] "(None)"
// "ABC" ["12:00,12:10,HELLO,ABC#ABC#ABC"] "HELLO"
// "ABC" ["12:04,13:00,HELLO,ABC#ABC#ABC"] "HELLO"
// "C#C" ["12:00,12:06,HELLO,C#C#CC#"] "HELLO"

// console.log(''.includes(''));

console.log(parseInt(3 / 2));
