function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    const numDict = {};
    for (let j = i + 1; j < arr.length; j++) {
      const pivot = -arr[j];
      if (pivot in numDict) {
        const [x, y] = numDict[pivot];
        answer.push([x, y, j]);
      }

      numDict[arr[i] + arr[j]] = [i, j];
    }
  }
  console.log(arr);
}

solution([1, 2, -1, -2, 4, 0, -4]);

// for (let i = 0; i < nums.length - 1; i++) {
//   const numsDict = {};

//   for (let j = i + 1; j < nums.length; j++) {
//     const complement = -nums[j];

//     if (complement in numsDict) {
//       const [x, y] = numsDict[complement];
//       ans.push([x, y, j]);
//     }
//     console.log(numsDict);
//     numsDict[nums[i] + nums[j]] = [i, j];
//   }
// }

// console.log(ans);