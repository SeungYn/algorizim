function linearSearch(arr, target) {
  // add whatever parameters you deem necessary - good luck!
  const answer = arr.find((i) => i === target);
  console.log(answer);
}

linearSearch([10, 15, 20, 25, 30], 15); // 1
linearSearch([100], 100); // 0
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
