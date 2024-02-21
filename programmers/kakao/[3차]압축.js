function solution(msg) {
  var answer = [];
  const arr = Array.from({ length: 26 }, (_, i) => [
    String.fromCharCode(i + 65),
    i + 1,
  ]);
  const map = Object.fromEntries(arr);
  let index = 27;

  for (let i = 0; i < msg.length; i++) {
    let str = '';
    let nextIndex = 0;
    for (let j = i; j < msg.length; j++) {
      str += msg[j];

      let keyValue = map[str];
      if (!keyValue) {
        str = str.slice(0, -1);
        nextIndex = j;
        break;
      }
    }

    answer.push(map[str]);
    map[str + msg[nextIndex]] = index++;
    i = nextIndex - 1;
    if (nextIndex === 0) break;
    //console.log(str, str+msg[nextIndex], nextIndex);
  }

  return answer;
}
