function solution(cap, n, deliveries, pickups) {
  var answer = -1;
  let nowIndex = n - 1,
    trukCapacity,
    upIndex;

  while (true) {
    upIndex = nowIndex;
    //현재 비어있는 공간
    trukSpace = cap;
    //창고에서 와서 싣기
    //싣을 수 있는 개수가 배달해야할 개수마다 작은 경우
    //
    while (trukSpace > 0) {
      if (trukSpace >= deliveries[upIndex]) {
        trukSpace -= deliveries[upIndex];
        deliveries[upIndex] = 0;
        upIndex--;
      } else {
        deliveries[upIndex] -= trukSpace;
        trukSpace = 0;
      }
      console.log(trukSpace);
    }
    console.log(deliveries);

    break;
  }
  return answer;
}

solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]);
