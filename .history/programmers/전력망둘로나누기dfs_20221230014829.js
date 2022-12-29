function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }).fill([]);
  graph.pusj(1);
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
