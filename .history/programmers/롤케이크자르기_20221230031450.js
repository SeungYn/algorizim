function solution(topping) {
  var answer = 0;
  const length = topping.length;
  const hung = {};

  for (let topp of topping) {
    hung[topp] = (hung[topp] || 0) + 1;
  }

  const proxyHung = new Proxy(hung, {
    set(target, value) {},
  });

  console.log((hung[1] = 3));
  const bro = {};
  for (let topp of topping) {
    bro[topp] = (bro[topp] || 0) + 1;
  }
  return answer;
}

solution([1, 2, 1, 3, 1, 4, 1, 2]);
