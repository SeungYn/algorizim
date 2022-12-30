function solution(topping) {
  var answer = 0;
  const hung = {};

  for (let topp of topping) {
    hung[topp] = (hung[topp] || 0) + 1;
  }

  const proxyHung = new Proxy(hung, {
    set(target, value) {
      console.log(target);
      if (!(value in target)) {
        return false;
      }
      console.log((target[value] -= 1));
      if ((target[value] -= 1) === 0) delete target[value];

      return true;
    },
  });

  const bro = {};
  for (let topp of topping) {
    bro[topp] = (bro[topp] || 0) + 1;
    proxyHung[topp] -= 1;
    if (Object.keys(proxyHung).length === Object.keys(bro).length) answer++;
    console.log(proxyHung, bro);
  }

  return answer;
}

solution([1, 2, 1, 3, 1, 4, 1, 2]);
