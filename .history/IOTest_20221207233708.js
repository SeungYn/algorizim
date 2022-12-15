/([a-zA-Z. -]+)([0-9]+)/;

function solution(files) {
  var answer = [];
  const reg = /([a-zA-Z. -]+)([0-9]+)/g;
  //console.log(files[0].match(reg));
  //console.log(reg.exec('img10.png'));
  files.sort((a, b) => {
    console.log(reg.exec(String(a)), a);
    //const [aHead, aNumber] = [reg.exec(a)[1], reg.exec(a)[2]];
    //console.log(aHead, aNumber);
  });
  return answer;
}

solution([
  'img12.png',
  'img10.png',
  'img02.png',
  'img1.png',
  'IMG01.GIF',
  'img2.JPG',
]);
// const arr = [
//   'img12.png',
//   'img10.png',
//   'img02.png',
//   'img1.png',
//   'IMG01.GIF',
//   'img2.JPG',
// ];
// for (let a of arr) {
//   const reg = /([a-zA-Z. -]+)([0-9]+)/g;
//   console.log(reg.exec(a));
// }

// arr.sort((a, b) => {
//   const reg = /([a-zA-Z. -]+)([0-9]+)/g;
//   console.log(reg.exec(a));
// });
