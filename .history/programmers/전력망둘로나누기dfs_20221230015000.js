function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (let line of wires) {
    const [a, b] = line;
    console.log(a, b);
  }
}

solution(4, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);
