const list = [9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = 1; i < list.length; i++) {
  let j,
    key = list[i];
  for (j = i - 1; j >= 0 && list[j] > key; j--) {
    list[j + 1] = list[j];
  }
  list[j + 1] = key;
}

console.log(list);
