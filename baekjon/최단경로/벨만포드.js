const INF = Infinity;

const n = 6;
const m = 9;

const edges = [
  [1, 2, 6],
  [1, 3, 2],
  [2, 3, 2],
  [4, 2, 4],
  [3, 5, 1],
  [4, 6, 2],
  [5, 2, 1],
  [5, 4, 3],
  [5, 6, 4],
];

const dist = new Array(n + 1).fill(INF);

function bf(start) {
  dist[start] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let [cur, nextNode, cost] = edges[j];

      if (dist[cur] !== INF && dist[nextNode] > dist[cur] + cost) {
        dist[nextNode] = dist[cur] + cost;
        if (i === n - 1) return true;
      }
    }
    console.log(dist);
  }

  return false;
}

console.log(bf(1));

// n-1 까지 최단경로가 갱신되면 음수 루프가 생긴것으로 간주
// 시간복잡도 O(ve)
