function solution(expression) {
  var answer = 0;
  const priorities = [
    ['-', '*', '+'],
    ['*', '+', '-'],
    ['*', '-', '+'],
    ['+', '*', '-'],
    ['+', '-', '*'],
    ['-', '+', '*'],
  ];

  for (const p of priorities) {
    answer = Math.max(answer, +Math.abs(calc(expression, 0, p)));
  }

  function calc(express, n, expression) {
    if (n === 2) return eval(express);

    if (expression[n] === '*')
      return eval(
        express
          .split('*')
          .map((ex) => calc(ex, n + 1, expression))
          .join('*')
      );
    else if (expression[n] === '-')
      return eval(
        express
          .split('-')
          .map((ex) => calc(ex, n + 1, expression))
          .join('-')
      );
    else if (expression[n] === '+')
      return eval(
        express
          .split('+')
          .map((ex) => calc(ex, n + 1, expression))
          .join('+')
      );
  }

  return answer;
}

// function solution(expression) {
//     const opersList = [['*', '+', '-'], ['*', '-', '+'], ['+', '-', '*'], ['+', '*', '-'], ['-', '+', '*'], ['-', '*', '+']];
//     var answer = 0;

//     for(const opers of opersList){
//         let nums = expression.split(/[\+\-\*]/);
//         let operation = expression.split(/\d/).filter(r=>r!=='');

//         for(const oper of opers){
//             let inum = [nums[0]];
//             let ioperation = [];
//             for(let i = 1; i < nums.length; i++){
//                 if(operation[i-1] === oper){

//                     inum[inum.length - 1] = (eval(`${inum[inum.length - 1]} ${oper} ${nums[i]}`));
//                 }else{
//                     inum.push(nums[i]);
//                     ioperation.push(operation[i-1]);
//                 }
//             }

//             nums = inum;
//             operation = ioperation;

//         }

//         answer = Math.max(answer, Math.abs(nums[0]));
//     }

//     return answer;
// }
