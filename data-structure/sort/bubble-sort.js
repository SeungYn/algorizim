const list = [9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = list.length - 1; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    if (list[j] > list[j + 1]) {
      const temp = list[j + 1];
      list[j + 1] = list[j];
      list[j] = temp;
    }
  }
}

console.log(list);
