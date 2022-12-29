function solution(n, wires) {
  for (let i = 1; i < n + 1; i++) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let j = 1; j < n + 1; j++) {
      if (i === j) continue;
      const [a, b] = wires[j];
      graph[a].push(b);
      graph[b].push(a);
    }

    break;
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
