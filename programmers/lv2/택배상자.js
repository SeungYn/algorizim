function solution(order) {
  var answer = 0;
  const stack = [];
  let index = 0;
  for (let i = 1; i <= order.length; i++) {
    if (order[index] === i) {
      answer++;
      index++;
    } else stack.push(i);

    while (index < order.length && stack[stack.length - 1] === order[index]) {
      stack.pop();
      index++;
      answer++;
    }
  }
  console.log(answer);
  return answer;
}

solution([5, 4, 3, 2, 1]);
