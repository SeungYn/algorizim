/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const nums = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  const result = [];

  // for 문인것 같지만 숫자가 몇 글자 들어올지 모름
  // 재귀인데...

  dfs(0, '');

  function dfs(dep, str) {
    if (dep >= digits.length) {
      if (str !== '') result.push(str);
      return;
    }

    for (let i = 0; i < nums[digits[dep]].length; i++) {
      dfs(dep + 1, str + nums[digits[dep]][i]);
    }
  }

  return result;
};
