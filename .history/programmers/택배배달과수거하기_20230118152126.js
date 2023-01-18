function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  let startIndex;
  for (let i = n - 1; i >= 0; i--) {
    if (deliveries[i] != 0 || pickups[i] != 0) {
      startIndex = i;
      break;
    }
  }
  let nowIndex = startIndex,
    trukSpace,
    upIndex,
    downIndex;

  while (nowIndex > 0) {
    upIndex = nowIndex;
    downIndex = nowIndex;
    //현재 비어있는 공간
    trukSpace = cap;
    //창고에서 와서 싣고 배달
    //싣을 수 있는 개수가 배달해야할 개수마다 작은 경우
    //
    while (trukSpace > 0) {
      if (upIndex < 0) break;
      if (trukSpace >= deliveries[upIndex]) {
        trukSpace -= deliveries[upIndex];
        deliveries[upIndex] = 0;
        upIndex--;
      } else {
        deliveries[upIndex] -= trukSpace;
        trukSpace = 0;
      }
    }
    while (deliveries[upIndex] == 0) upIndex--;
    trukSpace = cap;

    while (trukSpace > 0) {
      if (downIndex < 0) break;
      if (trukSpace >= pickups[downIndex]) {
        trukSpace -= pickups[downIndex];
        pickups[downIndex] = 0;
        downIndex--;
      } else {
        pickups[downIndex] -= trukSpace;
        trukSpace = 0;
      }
    }
    while (pickups[downIndex] == 0) downIndex--;

    answer += 2 * (nowIndex + 1);
    nowIndex = Math.max(upIndex, downIndex);
    if (nowIndex < 0) break;
  }
  console.log(answer);
  return answer;
}

solution(2, 2, [0, 6], [0, 0]);
