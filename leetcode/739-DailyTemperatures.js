/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = [];
  for (let i = 0; i < result.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack.at(-1)]) {
      const day = stack.pop();
      result[day] = i - day;
    }

    stack.push(i);
  }

  return result;
};
