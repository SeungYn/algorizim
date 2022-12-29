function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  console.log(graph);
  for (let line of wires) {
    const [a, b] = line;
    graph[a].push(b);
    graph[b].push(a);
  }
}

solution(4, [
  [1, 2],
  [2, 3],
  [3, 4],
]);
