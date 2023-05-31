/**
 * 각 두 점 사이 최단경로를 구할 때 k 를 거쳐서 가는 경우를 구해 최단경로를 구함
 */

const INF = Infinity;
const n = 5;

const graph = [
  [INF, INF, INF, INF, INF, INF],
  [INF, 0, 1, 5, INF, INF],
  [INF, 7, 0, 2, 2, INF],
  [INF, 2, INF, 0, INF, 6],
  [INF, INF, 2, INF, 0, INF],
  [INF, INF, INF, 1, INF, 0],
];

console.log(graph);

for (let k = 1; k <= n; k++) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      const cost = graph[a][k] + graph[k][b];
      graph[a][b] = Math.min(cost, graph[a][b]);
    }
  }
}

console.log(graph);
