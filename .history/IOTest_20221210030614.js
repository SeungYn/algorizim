function solution(want, number, discount) {
  var answer = 0;
  const arr = Array.from(want, (v, i) => [v, number[i]]);
  let obj;
  const sum = number.reduce((p, v) => p + v, 0);

  for (let i = 0; i < discount.length; i++) {
    let s = sum;
    obj = Object.fromEntries(arr);
    for (let j = i; j < discount.length; j++) {
      if (obj[discount[j]] > 0) {
        obj[discount[j]] -= 1;
        s--;
      }
      if (s === 0) {
        console.log(obj);
        answer++;
        break;
      }
    }
  }
  console.log(answer);
  return answer;
}

solution(
  ['banana', 'apple', 'rice', 'pork', 'pot'],
  [3, 2, 2, 2, 1],
  [
    'chicken',
    'apple',
    'apple',
    'banana',
    'rice',
    'apple',
    'pork',
    'banana',
    'pork',
    'rice',
    'pot',
    'banana',
    'apple',
    'banana',
  ]
);
