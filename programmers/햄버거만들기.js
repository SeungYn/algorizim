function solution(ing) {
  var answer = 0;
  let L = ing.length;
  let l = 0;
  for (i = 0; i < L; i += l) {
    // for(i of ing){
    console.log(i);
    let key = ing.slice(i, i + 4).join('');

    if (key == '1231') {
      // console.log("hey!")
      ing.splice(i, 4);
      answer += 1;
      // console.log(ing)
      l = -2;
    } else {
      l = 1;
    }
  }
  console.log(answer);
  return answer;
}

solution([1, 1, 2, 3, 1, 2, 3, 1, 1, 1, 2, 3, 1]);
//solution([1, 2, 3, 1]);
const arr = [1, 2, 3, 4];
console.log(+'123');
arr.sort((a, b) => b - a);
console.log(arr);
