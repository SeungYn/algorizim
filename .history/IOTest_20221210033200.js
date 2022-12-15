function solution(want, number, discount) {
  var answer = 0;
  const arr = Array.from(want, (v, i) => [v, number[i]]);
  let obj;
  const sum = number.reduce((p, v) => p + v, 0);

  for (let i = 0; i < discount.length; i++) {
    let s = sum;
    obj = Object.fromEntries(arr);

    for (let j = i; j < i + 10; j++) {
      if (obj[discount[j]] > 0) {
        obj[discount[j]] -= 1;
        s--;
      }
      if (s === 0) {
        console.log(i);
        answer++;
        break;
      }
    }
  }
  console.log(answer);
  return answer;
}

function solution2(want, number, discount) {
  var answer = 0;
  //want.sort();
  let test = want.map((v, i) => new Array(number[i]).fill(v));
  test = test.flat();
  test.sort();
  for (let i = 0; i < discount.length - 9; i++) {
    const slice = discount.slice(i, i + 10);

    const arr = slice.filter((v) => want.includes(v));
    arr.sort();
    console.log(arr, test);
    if (arr.every((v, i) => v === test[i])) answer++;
  }
  console.log(answer);
  return answer;
}
solution2(
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
