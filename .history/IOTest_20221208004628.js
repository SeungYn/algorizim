/([a-zA-Z. -]+)([0-9]+)/;

function solution(files) {
  var answer = [];

  //console.log(files[0].match(reg));
  //console.log(reg.exec('img10.png'));
  files.sort((a, b) => {
    const A = /([a-zA-Z. -]+)([0-9]+)/g.exec(a);
    const B = /([a-zA-Z. -]+)([0-9]+)/g.exec(b);
    if (A[1].toUpperCase() > B[1].toUpperCase()) {
      return 1;
    } else if (A[1].toUpperCase() < B[1].toUpperCase()) {
      return -1;
    } else {
      if (parseInt(A[2]) > parseInt(B[2])) {
        return 1;
      } else if (parseInt(A[2]) < parseInt(B[2])) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  console.log(files);
  return files;
}
// solution([
//   'img12.png',
//   'img10.png',
//   'img02.png',
//   'img1.png',
//   'IMG01.GIF',
//   'img2.JPG',
// ]);

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

const re = /([a-zA-Z. -]+)([0-9]+)/;
console.log('img1.png'.match(re));

// arr.sort((a, b) => {
//   const reg = /([a-zA-Z. -]+)([0-9]+)/g;

//   console.log(reg.exec(a));
// });
