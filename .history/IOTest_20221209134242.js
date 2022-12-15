function solution(maps) {
  var answer = 0;
  const visited = [];
  for (let i = 0; i < maps.length; i++) {
    visited.push(Array.from({ length: maps[0].length }, () => false));
  }
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  const q = [[1, 0, 0]];

  visited[0][0] = true;

  while (q.length > 0) {
    const [d, x, y] = q.shift();
    console.log(d, x, y);
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < maps[0].length &&
        ny >= 0 &&
        ny < maps[0].length &&
        visited[nx][ny] === false &&
        maps[nx][ny] !== 0
      ) {
        q.push([d + 1, nx, ny]);
        visited[nx][ny] = true;
      }
    }
  }
  return answer;
}

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);

const a = [[]];
console.log(a[1][3]);
