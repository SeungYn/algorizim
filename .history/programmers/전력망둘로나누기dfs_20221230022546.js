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

    for (let k = 1; k < n + 1; k++) {
      dfs(graph, visited, k, k);
    }

    const set = [...new Set(visited)];
    const aCount = visited.reduce((p, c) => (c === set[1] ? p + 1 : p), 0);
    const bCount = visited.reduce((p, c) => (c === set[2] ? p + 1 : p), 0);
    console.log(aCount, bCount);
  }
  console.log(visited);
  console.log(graph);
}

function dfs(graph, visited, n, p) {
  if (visited[n] !== 0) return;
  visited[n] = p;
  for (let k of graph[n]) {
    dfs(graph, visited, k, p);
  }
}

solution(4, [
  [1, 2],
  [2, 3],
  [3, 4],
]);
