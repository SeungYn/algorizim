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
  const parent = new Array(n + 1).map((v, i) => i);
  console.log(parent);
}
