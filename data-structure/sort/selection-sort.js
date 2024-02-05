const list = [9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = 0; i < list.length - 1; i++) {
  let least = i;

  for (let j = i + 1; j < list.length; j++) {
    if (list[least] > list[j]) least = j;
  }
  swap(i, least, list);
}

console.log(list);

function swap(i, j, list) {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}
