function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  console.log(graph);
  for (let line of wires) {
    const [a, b] = line;
    graph[a].push(b);
    graph[b].push(a);
  }
  console.log(graph);
}

solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);
