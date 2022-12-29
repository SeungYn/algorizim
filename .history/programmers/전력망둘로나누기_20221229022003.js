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
  find_parent_zip(parent, a);
  find_parent_zip(parent, b);
}

function solution(n, wires) {
  let minValue = Infinity;
  for (let i = 0; i < wires.length; i++) {
    const parent = new Array(n + 1).fill(0).map((v, i) => i);
    for (let j = 0; j < wires.length; j++) {
      if (i === j) continue;
      const [a, b] = wires[j];

      union_parent(parent, a, b);
    }
    console.log(parent);
    const set = [...new Set(parent)];

    const aCount = parent.reduce((p, c) => (c === set[1] ? p + 1 : p), 0);
    const bCount = parent.reduce((p, c) => (c === set[2] ? p + 1 : p), 0);
    minValue = Math.min(Math.abs(aCount) - Math.abs(bCount), minvalue);
    break;
  }
}

solution(4, [
  [1, 2],
  [2, 3],
  [3, 4],
]);
