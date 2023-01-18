function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  let nowIndex = n - 1,
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
    answer += 2 * (nowIndex + 1);
    nowIndex = Math.max(upIndex, downIndex);
    if (nowIndex < 0) break;
  }
  console.log(answer);
  return answer;
}

solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]);
