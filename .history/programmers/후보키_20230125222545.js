// function solution(relation) {
//   var answer = 0;
//   const rowLength = relation.length;
//   const colLength = relation[0].length;
//   let nowIndex = 0;
// 	let list = [];
// 	let useCols = [];
// 	for (let i = 0; i < colLength; i++){
// 		const cols = [];
// 		for (let j = i; j < colLength; j++){
// 			for (let k = 0; k < rowLength; k++){
// 				if (i === j) {
// 					cols.push(relation[k][j]);
// 					continue;
// 				}
// 				cols[k] += relation[k][j];

// 			}
// 			const set = new Set(cols);
// 			if (set.length === rowLength) {
// 				answer++;
// 				useCols.push(i);
// 				break;
// 			}
// 		}
// 	}

//   console.log(answer);
//   return answer;
// }

// solution([
//   ['100', 'ryan', 'music', '2'],
//   ['200', 'apeach', 'math', '2'],
//   ['300', 'tube', 'computer', '3'],
//   ['400', 'con', 'computer', '4'],
//   ['500', 'muzi', 'music', '3'],
//   ['600', 'apeach', 'music', '2'],
// ]);

/**
 * 컴럼별로 set 여러 컬럼이 선택되면 다시 컬럼에서 분해될때까지 반복 없으면 멈춤 -> 유일성을 만족하지만 최소성을 만족 못 함
 */

const combinations = (arr, selectNumber) => {
  const result = [];

  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const cms = combinations(rest, selectNumber - 1);
    const attached = cms.map((el) => [fixed, ...el]);
    result.push(...attached);
  });

  return result;
};

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

console.log(combinations3([1, 2, 3, 4], 3));
