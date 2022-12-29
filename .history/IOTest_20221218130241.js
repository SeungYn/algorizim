const arr = [1, 2, 3, 4];
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

getPermutations(arr, 4);

const getPermutations2 = (arr, num) => {
  const results = [];
  if (num === 1) return arr.map((v) => [v]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

    const permutations = getPermutations2(rest, num - 1);
    const attached = permutations.map((v) => [fixed, ...v]);
    results.push(...attached);
  });
};
