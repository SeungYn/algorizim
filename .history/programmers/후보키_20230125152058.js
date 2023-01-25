function solution(relation) {
  var answer = 0;
  const rowLength = relation.length;
  const colLength = relation[0].length;
  let targetColList = Array.from({ length: colLength }, (_, i) => i);
  console.log(targetColList);

  while (true) {
    const list = relation.map((arr) => arr[nowCol]);
    console.log(list);
    const set = new Set(list);
    console.log(set);

    break;
  }

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
