function solution(relation) {
  var answer = 0;
  const rowLength = relation.length;
  const colLength = relation[0].length;
  const cols = Array.from({ length: colLength }, (v, i) => i);
  const combi = cols.map((i) => combinations(cols, i + 1));
  const usedCol = [];
  combi.forEach((cm) => {
    const line = [];
    cm.forEach((el) => {
      const colLine = [];
      const useCol = [];
      for (let j = 0; j < rowLength; j++) {
        const rowLine = [];
        for (let i = 0; i < el.length; i++) {
          if (usedCol.includes(el[i])) break;
          rowLine.push(relation[j][el[i]]);
          useCol.push(el[i]);
        }
        colLine.push(rowLine.join(''));
      }
      //console.log(colLine);
      console.log(usedCol);
      const set = new Set(colLine);
      if (set.size === rowLength) {
        usedCol.push(useCol.join());
        answer++;
      }
    });
  });
  console.log(answer);
  return answer;
}

solution([
  ['a', '1', 'aaa', 'c', 'ng'],
  ['a', '1', 'bbb', 'e', 'g'],
  ['c', '1', 'aaa', 'd', 'ng'],
  ['d', '2', 'bbb', 'd', 'ng'],
]);
/**
 * 컴럼별로 set 여러 컬럼이 선택되면 다시 컬럼에서 분해될때까지 반복 없으면 멈춤 -> 유일성을 만족하지만 최소성을 만족 못 함
 */

function combinations(arr, selectNumber) {
  const result = [];

  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const cms = combinations(rest, selectNumber - 1);
    const attached = cms.map((el) => [fixed, ...el]);
    result.push(...attached);
  });

  return result;
}

function combinations3(arr, selectNumber) {
  const result = []; // 결과물 저장소
  if (selectNumber === 1) return arr.map((i) => [i]); // 한개만 선택될 아이템
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const cms = combinations3(rest, selectNumber - 1);
    const attached = cms.map((list) => [fixed, ...list]);
    result.push(...attached);
  });
  return result;
}

// console.log(combinations3([1, 2, 3, 4], 3));
