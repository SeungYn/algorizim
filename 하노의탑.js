// 왜 재귀를 써야할까? 반복되는 구간의 존재를 확인
// 어떻게 재귀로 풀수 있는 걸까?

function hanoi(n, start, to, via) {
  if (n === 1) return console.log(n, start, to);
  hanoi(n - 1, start, via, to);
  console.log(n, start, to);
  hanoi(n - 1, via, to, start);
}

hanoi(3, 'a', 'c', 'b');
