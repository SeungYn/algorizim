/([a-zA-Z. -]+)([0-9]+)/;

function solution(files) {
  var answer = [];
  const reg = /([a-zA-Z. -]+)([0-9]+)/g;
  console.log(files[0].match(reg));
  console.log(reg.exec(files[0]));
  files.sort((a, b) => {
    console.log(a);
    const [aHead, bHead] = [reg.exec(a)];
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
