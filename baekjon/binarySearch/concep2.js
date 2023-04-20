const arr = [1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4];

//아래와 같이 start를 고정시키는 방식으로 안되는 이유는 고정 시킨 이후 고정 시킨 값 이후 값으로 arr[mid]값이 target보다 작아지면 안됨
// 결정적인 이유는 start와 end를 더하고 2로 나웠을때 무조건 start부터 시작하기 때문 오른쪽에서 부터 찾으면 end숫자가 나올일이 없지만
// 왼쪽부터 찾으면 start이 무조건 mid 값으로 나오게 되어 arr[mid] < target 조건으로 무한 루프를 돌게 됨
// 이 문제를 해결하기 위해선 무조건 올림을 해주거나 다른 조치를 치뤄야함
// function lowerBound(arr, start, end, target) {
//   while (start < end) {
//     const mid = Math.ceil((start + end) / 2);
//     if (arr[mid] < target)
//       start = mid; //이 조건문에 의해 계속 반복하게 되어서 탈출할수 없음
//     else end = mid - 1;
//   }
//   return start;
// }

function lowerBound(arr, start, end, target) {
  while (start < end) {
    console.log(start, end);
    const mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

//end를 고정 시키고 start를 계속 증가시켜 종료시키도록 구현됨
function upperBound(arr, start, end, target) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, 0, arr.length, rightValue);
  let leftIndex = lowerBound(arr, 0, arr.length, leftValue);
  console.log(rightIndex, leftIndex);
  return rightIndex - leftIndex;
}

//console.log(lowerBound(arr, 0, arr.length, 3));
//console.log(upperBound(arr, 0, arr.length, 3));

console.log(countByRange(arr, -1, 3));

module.exports = {
  lowerBound,
  upperBound,
};
