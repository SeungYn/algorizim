const data = [0, 8, 6, 7, 4, 1, 3, 2, 5];

console.log(data);

function factorial(n) {
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
}

const visited = new Array(data.length + 1).fill(false);
const res = [];
for (let i = 1; i < data.length; i++) {
  if (!visited[i]) {
    res.push(dfs(data, i, visited, 0));
  }
}

const result = res.reduce((p, c) => {
  if (c === 1) return p;
  if (c === 2) return p + 1;
  return (
    p +
    factorial(c) / (factorial(parseInt(c / 2)) * factorial(c - parseInt(c / 2)))
  );
}, 0);

console.log(result);

function dfs(arr, i, visited, cnt) {
  if (visited[i]) return cnt;
  visited[i] = true;
  return dfs(arr, arr[i], visited, cnt + 1);
}
