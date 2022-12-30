function solution(topping) {
  var answer = 0;
  const length = topping.length;
  const obj = {};
  for (let topp of topping) {
    obj[topp.toString()] = (obj[topp.toString()] || 0) + 1;
  }
  console.log(obj);
  return answer;
}

solution([1, 2, 1, 3, 1, 4, 1, 2]);
