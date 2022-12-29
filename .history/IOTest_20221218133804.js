const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(arr.slice(1));

const getPermutations = (arr, num) => {
  const results = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

    const permutations = getPermutations(rest, num - 1);
    const attached = permutations.map((v) => [fixed, ...v]);
    results.push(...attached);
  });
  console.log(results);
  return results;
};

//getPermutations(arr, 4);

const getPermutations2 = (arr, num) => {
  const results = [];
  if (num === 1) return arr.map((v) => [v]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

    const permutations = getPermutations2(rest, num - 1);
    const attached = permutations.map((v) => [fixed, ...v]);
    results.push(...attached);
  });

  return results;
};

console.log(getPermutations2(arr, 10));

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1);
    // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((el) => [fixed, ...el]);
    //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached);
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};
