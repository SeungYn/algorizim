function solution(topping) {
  var answer = -1;
  const length = topping.length;

  for (let i = 1; i < length; i++) {
    const a = topping.slice(0, i);
    const b = topping.slice(i);
    console.log(a, b);
    break;
  }
  return answer;
}

solution([1, 2, 1, 3, 1, 4, 1, 2]);
