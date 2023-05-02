let arr = ['# . . . . . #', '# . . . . . #', '# # . . # #'];
console.log(arr);

const shape = [
  [
    [0, 0],
    [0, 1],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 0],
  ],
  [
    [0, 0],
    [1, 0],
    [1, -1],
  ],
];

const ar = arr.map((i) => {
  return i.split(' ').map((j) => {
    if (j === '#') return 1;
    return 0;
  });
});

let currentReuslt = new Set();
let result = 0;
let allResult = [];
let visited = ar.map((i) => [...i]);

const n = ar.length;
const m = ar[0].length;

console.log(n, m);
console.log(
  [
    ['a', 'b'],
    ['b', 'c'],
  ]
    .flat()
    .join('')
);
console.log(visited);
dfs(0, 0);
console.log(result);

function dfs(x, y) {
  console.log(visited);

  if (x === n - 1 && y === m - 1) {
    const res = currentReuslt.join('');
    consol.log(res);
    if (allResult.includes(res)) return;
    allResult.push(res);
    result++;

    return;
  }

  for (let i = x; i < n; i++) {
    for (let j = y; j < m; j++) {
      if (visited[i][j]) continue;

      for (let k = 0; k < 4; k++) {
        const [[x, y], [x2, y2], [x3, y3]] = [
          [i + shape[k][0][0], j + shape[k][0][1]],
          [i + shape[k][1][0], j + shape[k][1][1]],
          [i + shape[k][2][0], j + shape[k][2][1]],
        ];

        if (
          x < 0 ||
          x >= n ||
          x2 < 0 ||
          x2 >= n ||
          x3 < 0 ||
          x3 >= n ||
          y < 0 ||
          y >= m ||
          y2 < 0 ||
          y2 >= m ||
          y3 < 0 ||
          y3 >= m
        )
          continue;
        if (currentReuslt.has(x + y + x2 + y2 + x3 + y3)) continue;
        visited[x][y] = 1;
        visited[x2][y2] = 1;
        visited[x3][y3] = 1;

        currentReuslt.add(x + y + x2 + y2 + x3 + y3);
        dfs(i, j);
        currentReuslt.delete(x + y + x2 + y2 + x3 + y3);

        visited[x][y] = 0;
        visited[x2][y2] = 0;
        visited[x3][y3] = 0;
      }
    }
  }
}
