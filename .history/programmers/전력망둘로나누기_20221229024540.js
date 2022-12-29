function find_parent(parent, x) {
  if (parent[x] !== x) {
    return find_parent(parent, parent[x]);
  }
  return x;
}

function find_parent_zip(parent, x) {
  if (parent[x] !== x) {
    parent[x] = find_parent(parent, parent[x]);
  }
  return parent[x];
}

function union_parent(parent, a, b) {
  a = find_parent_zip(parent, a);
  b = find_parent_zip(parent, b);

  if (a < b) parent[b] = a;
  else parent[a] = b;
}

function solution(n, wires) {
  let minValue = Infinity;
  console.log(wires.length);
  for (let i = 0; i < wires.length; i++) {
    const parent = new Array(n + 1).fill(0).map((v, i) => i);
    for (let j = 0; j < wires.length; j++) {
      if (i === j) continue;
      const [a, b] = wires[j];

      union_parent(parent, a, b);
    }
    for (let k = 1; k < n + 1; k++) {
      find_parent_zip(parent, k);
    }
    const set = [...new Set(parent)];
    console.log(parent);
    const aCount = parent.reduce((p, c) => (c === set[1] ? p + 1 : p), 0);
    const bCount = parent.reduce((p, c) => (c === set[2] ? p + 1 : p), 0);
    minValue = Math.min(Math.abs(aCount - bCount), minValue);
  }
  console.log(minValue);
  return minValue;
}

solution(4, [
  [1, 2],
  [3, 4],
  [2, 3],
]);
