function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  graph[3].push(3);
  console.log(graph);
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
