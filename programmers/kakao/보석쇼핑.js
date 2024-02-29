function solution(gems) {
  var answer = [];
  const gemSet = new Set();
  const currentList = [];
  const currentMap = new Map();
  let currentSize = 0;
  const maxSize = new Set(gems).size;

  for (let start = 0, end = 0; start < gems.length; start++) {
    while (currentMap.size < maxSize && end < gems.length) {
      //gemSet.add(gems[end]);
      //currentList.push(gems[end]);
      if (currentMap.has(gems[end])) {
        currentMap.set(gems[end], currentMap.get(gems[end]) + 1);
      } else currentMap.set(gems[end], 1);
      currentSize++;
      end++;
    }

    if (currentMap.size === maxSize) {
      if (answer.length > 0) {
        if (answer[0] > currentSize) answer = [currentSize, start + 1, end];
      } else answer = [currentSize, start + 1, end];
    }

    //currentList.shift();
    if (currentMap.get(gems[start]) === 1) {
      currentMap.delete(gems[start]);
    } else currentMap.set(gems[start], currentMap.get(gems[start]) - 1);
    currentSize--;
  }

  console.log(answer);
  return answer.slice(1);
}
