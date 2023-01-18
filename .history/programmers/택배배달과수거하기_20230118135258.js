function solution(cap, n, deliveries, pickups) {
  var answer = -1;
  let nowIndex = n - 1,
    trukCapacity,
    upIndex;
  while (true) {
    upIndex = nowIndex;
    trukCapacity = 0;
    //창고에서 와서 싣기
    while (trukCapacity < cap) {
      if (cap <= deliveries[upIndex]) {
        trukCapacity = deliveries[upIndex];
        deliveries[upIndex] = 0;
      } else {
        trukCapacity = deliveries[upIndex] - cap;
        deliveries[upIndex] -= cap;
      }
      upIndex--;
    }
    console.log(deliveries);
    console.log(trukCapacity);
    break;
  }
  return answer;
}

solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]);
