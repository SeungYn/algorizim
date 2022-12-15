/([a-zA-Z. -]+)([0-9]+)/;

function solution(files) {
  var answer = [];

  //console.log(files[0].match(reg));
  //console.log(reg.exec('img10.png'));
  files.sort((a, b) => {
    const A = /([a-zA-Z. -]+)([0-9]+)/g.exec(a);
    const B = /([a-zA-Z. -]+)([0-9]+)/g.exec(b);
    console.log(A, B);
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

// for (let a of arr) {
//   const reg = /([a-zA-Z. -]+)([0-9]+)/g;
//   console.log(reg.exec(a));
// }

const arr = [
  'img12.png',
  'img10.png',
  'img02.png',
  'img1.png',
  'IMG01.GIF',
  'img2.JPG',
];

// const re = /([a-zA-Z. -]+)([0-9]+)/g;
// arr.sort((a, b) => {
//   console.log(re.exec(a));
// });

// arr.sort((a, b) => {
//   const reg = /([a-zA-Z. -]+)([0-9]+)/g;

//   console.log(reg.exec(a));
// });
