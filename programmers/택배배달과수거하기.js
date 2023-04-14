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
  upIndex = nowIndex;
  downIndex = nowIndex;
  while (nowIndex >= 0) {
    //upIndex = nowIndex;  < 이거 두개를 와일 안쪽에다 두면 시간 초과남 남아있는 인덱스부터 시작해야함 왜냐하면 한쪽 배열이 무진장 길수 있음 
    //downIndex = nowIndex; <nowindex 부터 하면 그래서 택배가 있는 집을 마커해두어서 다시 배달할때 해당 집부터 시작할 수 있는게 중요
    //현재 비어있는 공간
    trukSpace = cap;
    //창고에서 와서 싣고 배달
    //싣을 수 있는 개수가 배달해야할 개수마다 작은 경우
    //
    while (trukSpace > 0) {
      if (upIndex < 0) break;
      if (trukSpace >= deliveries[upIndex]) {
        trukSpace -= deliveries[upIndex];
        deliveries[upIndex] = 0;image.png
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

solution(1, 1, [2], [0]);
