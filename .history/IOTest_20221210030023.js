function solution(want, number, discount) {
  var answer = 0;
  const arr = Array.from(want, (v, i) => [v, number[i]]);
  const obj = Object.fromEntries(arr);
  const sum = number.reduce((p, v) => p + v, 0);

  for (let i = 0; i < discount.length; i++) {
    let s = sum;
    for (let j = i; i < discount.length; j++) {
      if (obj[discount[j]] > 0) {
      }
      console.log(i);
    }
  }
  console.log(undefined > 1);
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
