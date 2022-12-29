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
  for (let i = 0; i < wires.length; i++) {
    const parent = new Array(n + 1).fill(0).map((v, i) => i);
    for (let j = 0; j < wires.length; j++) {
      if (i === j) continue;
      const [a, b] = wires[j];
      console.log(a, b);
    }
    break;
  }
}

solution(4, [
  [1, 2],
  [2, 3],
  [3, 4],
]);
