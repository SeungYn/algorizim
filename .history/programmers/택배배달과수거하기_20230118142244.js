function solution(cap, n, deliveries, pickups) {
  var answer = -1;
  let nowIndex = n - 1,
    trukCapacity,
    upIndex;

  while (true) {
    upIndex = nowIndex;
    trukCapacity = cap;
    //창고에서 와서 싣기
    //싣을 수 있는 개수가 배달해야할 개수마다 작은 경우
    //
    while (trukCapacity > 0) {
      if (trukCapacity >= deliveries[upIndex]) {
        trukCapacity -= deliveries[upIndex];
        deliveries[upIndex] = 0;
        console.log(deliveries);
      } else {
        let lastSpace = cap - trukCapacity;
        trukCapacity += lastSpace;
        deliveries[upIndex] -= lastSpace;
        console.log(deliveries);
      }
      upIndex--;
      break;
    }
    console.log(deliveries);
    console.log(trukCapacity);
    break;
  }
  return answer;
}

solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]);
