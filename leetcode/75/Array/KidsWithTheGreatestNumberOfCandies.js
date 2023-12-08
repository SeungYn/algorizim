/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies1 = function (candies, extraCandies) {
  const copyCandies = [...candies];
  const result = [];

  for (let i = 0; i < candies.length; i++) {
    let flag = true;
    copyCandies[i] += extraCandies;

    for (let j = 0; j < candies.length; j++) {
      if (i === j) continue;
      if (copyCandies[i] < copyCandies[j]) {
        flag = false;
        break;
      }
    }
    copyCandies[i] -= extraCandies;
    result.push(flag);
  }

  return result;
};

var kidsWithCandies2 = function (candies, extraCandies) {
  const maxCandi = Math.max(...candies);
  const result = candies.map((i) => i + extraCandies >= maxCandi);

  return result;
};
