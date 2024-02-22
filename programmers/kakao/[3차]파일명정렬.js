function solution(files) {
  var answer = [];
  const fileReg = /([\D]+)(\d{1,5})(.*)/;

  for (let file of files) {
    const [_, head, num, tail] = file.match(fileReg);
    answer.push([head, num, tail ? tail : '']);
  }

  answer.sort((a, b) => {
    const headDifference = a[0].toLowerCase() < b[0].toLowerCase();
    if (a[0].toLowerCase() === b[0].toLowerCase()) {
      const numberDifference = Number(a[1]) - Number(b[1]);
      return numberDifference;
    }
    return headDifference ? -1 : 1;
  });

  return answer.map((s) => s.join(''));
}
