/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  let result = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== '0') {
        result++;
        //grid[i][j] = "0";
        dfs(i, j);
      }
    }
  }

  function dfs(x, y) {
    if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === '0') return;
    grid[x][y] = '0';
    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
  }
  return result;
};
