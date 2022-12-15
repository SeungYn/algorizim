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
   
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < maps[0].length &&
        ny >= 0 &&
        ny < maps[0].length &&
      ) {
        if (visited[nx][ny] === false &&
        maps[nx][ny] !== 0){
        q.push([d + 1, nx, ny]);
        maps[nx][ny] = d+1;
        visited[nx][ny] = true;
      }
  }
    }
  }
  
  return maps[maps.length-1][maps[0].length-1] === 1 ? -1 : maps[maps.length-1][maps[0].length-1];
}

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);

const a = [[], []];
console.log(true && !a[1][3]);
