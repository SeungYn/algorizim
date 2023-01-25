function solution(relation) {
  var answer = 0;
  const rowLength = relation.length;
  const colLength = relation[0].length;
  let targetColList = Array.from({ length: colLength }, (_, i) => i);
  let restTargetColList = [];
  console.log(targetColList);

  while (targetColList.length > 0) {
    let index = targetColList.shift();
    const list = relation.map((arr) => arr[index]);
    const set = new Set(list);
    if (set.size === rowLength) {
      answer++;
      continue;
    }
    restTargetColList.push(index);
  }

  console.log(answer);
  return answer;
}

solution([
  ['100', 'ryan', 'music', '2'],
  ['200', 'apeach', 'math', '2'],
  ['300', 'tube', 'computer', '3'],
  ['400', 'con', 'computer', '4'],
  ['500', 'muzi', 'music', '3'],
  ['600', 'apeach', 'music', '2'],
]);

/**
 * 컴럼별로 set 여러 컬럼이 선택되면 다시 컬럼에서 분해될때까지 반복 없으면 멈춤
 */
const a = new Set([[1], [2]]);
