const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  enqueue(x, oper) {
    const node = new Node(x, oper);
    if (this.start === null) {
      this.start = node;
      this.end = node;
    } else {
      this.end.next = node;
      this.end = node;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) throw new Error('empty');
    const deleteNode = this.start;
    this.start = this.start.next;
    this.size--;
    if (this.size === 0) {
      this.end = null;
    }

    return deleteNode;
  }
}

class Node {
  constructor(x, oper) {
    this.x = x;
    this.oper = oper;
    this.next = null;
  }
}

const [s, t] = input[0].split(' ').map(Number);

const map = new Array(t + 1).fill(-1);

map[s] = 0;

const q = new Queue();
q.enqueue(s, '');

while (q.size > 0) {
  const { x, oper } = q.dequeue();
  if (x === 0) continue;
  if (x === t) {
    console.log(oper);

    return;
  }
  for (const op of ['*', '+', '-', '/']) {
    let next = x;
    if (op === '+') {
      next += next;
    } else if (op === '-') {
      next -= next;
    } else if (op === '*') {
      next *= next;
    } else if (op === '/') {
      next /= next;
    }

    if (next < 0 || next > t) continue;
    if (map[next] !== -1) continue;

    map[next] = map[x] + 1;
    q.enqueue(next, oper + op);
  }
}
console.log(-1);

// const fs = require('fs');
// const PATH =
//   process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

// const input = fs.readFileSync(PATH).toString().trim().split('\n');
// const n = +input[0];

// class Queue {
//   constructor() {
//     this.start = null;
//     this.end = null;
//     this.size = 0;
//   }

//   enqueue(x, oper) {
//     const node = new Node(x, oper);
//     if (this.start === null) {
//       this.start = node;
//       this.end = node;
//     } else {
//       this.end.next = node;
//       this.end = node;
//     }
//     this.size++;
//   }

//   dequeue() {
//     if (this.size === 0) throw new Error('empty');
//     const deleteNode = this.start;
//     this.start = this.start.next;
//     this.size--;
//     if (this.size === 0) {
//       this.end = null;
//     }

//     return deleteNode;
//   }
// }

// class Node {
//   constructor(x, oper) {
//     this.x = x;
//     this.oper = oper;
//     this.next = null;
//   }
// }

// const [s, t] = input[0].split(' ').map(Number);
// if (s === t) return console.log(0);
// const map = new Set();
// const q = new Queue();
// q.enqueue(s, '');

// while (q.size > 0) {
//   const { x, oper } = q.dequeue();

//   if (x === t) {
//     console.log(oper);

//     return;
//   }
//   for (const op of ['*', '+', '-', '/']) {
//     let next = x;
//     if (op === '+') {
//       next += next;
//     } else if (op === '-') {
//       next -= next;
//     } else if (op === '*') {
//       next *= next;
//     } else if (op === '/') {
//       next = 1;
//     }

//     if (next < 0 || next > t) continue;
//     if (map.has(next)) continue;

//     map.add(next);
//     q.enqueue(next, oper + op);
//   }
// }
// console.log(-1);
// const current = [];

// dfs(s, map, current);
// function dfs(x, map, current) {
//   console.log(x);
//   if (x > t) return;
//   if (x <= 0) return;
//   if (map[x] === -1) return;
//   if (x === t) {
//     console.log(current);
//     return;
//   }
//   current.push('+');
//   dfs(x + x, map, current);
//   current.pop();

//   current.push('-');
//   dfs(x - x, map, current);
//   current.pop();

//   current.push('*');
//   dfs(x * x, map, current);
//   current.pop();

//   if (x !== 0) {
//     current.push('/');
//     dfs(x / x, map, current);
//     current.pop();
//   }
// }
