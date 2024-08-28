/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = new Array(n + 1).fill(false);
  const distance = new Array(n + 1).fill(Infinity);
  distance[0] = -1;
  for (let [u, v, w] of times) {
    // 노드 : [타겟, 시간]
    graph[u].push([v, w]);
  }

  dijkstra(k);
  if (
    distance.some((v, i) => {
      if (v === Infinity) return true;
      return false;
    })
  ) {
    return -1;
  } else {
    return Math.max(...distance);
  }

  function dijkstra(start) {
    visited[start] = true;
    distance[start] = 0;
    for (let [target, time] of graph[start]) {
      distance[target] = time;
    }

    for (let i = 0; i < n; i++) {
      const next = getSmallestIndex();
      visited[next] = true;

      for (let [target, time] of graph[next]) {
        if (distance[target] > distance[next] + time) {
          distance[target] = distance[next] + time;
        }
      }
    }
  }

  function getSmallestIndex() {
    let min = Infinity;
    let index = 0;

    for (let i = 1; i < n + 1; i++) {
      if (!visited[i] && distance[i] < min) {
        index = i;
        min = distance[i];
      }
    }
    return index;
  }
};
