function hanoi(n, start, to, via) {
  if (n === 1) return console.log(n, start, to);
  hanoi(n - 1, start, via, to);
  console.log(n, start, to);
  hanoi(n - 1, via, to, start);
}

hanoi(3, 'a', 'c', 'b');
