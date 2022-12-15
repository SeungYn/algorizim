function linearSearch(arr, target) {
  // add whatever parameters you deem necessary - good luck!
  const answer = arr.find((i) => i === target);
  console.log(answer);
}

linearSearch([10, 15, 20, 25, 30], 15); // 1
linearSearch([100], 100); // 0
