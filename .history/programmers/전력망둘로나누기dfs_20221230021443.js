function solution(n, wires) {
  const wiresLength = wires.length;
  let graph = null;
  let visited = [];
  for (let i = 0; i < wiresLength; i++) {
    graph = Array.from({ length: n + 1 }, () => []);
    visited = new Array(n + 1).fill(0);
    for (let j = 0; j < wiresLength; j++) {
      if (i === j) continue;
      const [a, b] = wires[j];
      graph[a].push(b);
      graph[b].push(a);
    }

    break;
  }
  console.log(visited);
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
