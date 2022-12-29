function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (let line of wires) {
    const [a, b] = line;
    graph[a].push(b);
    graph[b].push(a);
  }

  console.log(graph);
}

function dfs(graph, visited, n, p) {
  visited[n] = p;
  for (let k of graph[n]) {
    if (visited[k] === 0) {
      dfs(graph, visited, k, p);
    }
  }
}

solution(4, [
  [1, 2],
  [2, 3],
  [3, 4],
]);
