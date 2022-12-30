// function solution(topping) {
//   var answer = 0;
//   const hung = {};

//   for (let topp of topping) {
//     hung[topp] = (hung[topp] || 0) + 1;
//   }

//   const proxyHung = new Proxy(hung, {
//     set(target, value) {
//       if (!(value in target)) {
//         return false;
//       }

//       if ((target[value] -= 1) === 0) delete target[value];

//       return true;
//     },
//   });

//   const bro = {};
//   for (let topp of topping) {
//     bro[topp] = (bro[topp] || 0) + 1;
//     proxyHung[topp] -= 1;
//     if (Object.keys(proxyHung).length === Object.keys(bro).length) answer++;
//   }

//   return answer;
// }

// function solution(topping) {
//   var answer = 0;
//   const hung = {};

//   for (let topp of topping) {
//     hung[topp] = (hung[topp] || 0) + 1;
//   }

//   const proxyHung = new Proxy(hung, {
//     set(target, value) {
//       if (!(value in target)) {
//         return false;
//       }

//       if ((target[value] -= 1) === 0) delete target[value];

//       return true;
//     },
//   });

//   const bro = {};
//   for (let topp of topping) {
//     bro[topp] = (bro[topp] || 0) + 1;
//     proxyHung[topp] -= 1;
//     if (Object.keys(proxyHung).length === Object.keys(bro).length) answer++;
//   }

//   return answer;
// }

function solution(topping) {
  var answer = 0;
  const hung = new Map();

  for (let topp of topping) {
    hung[topp] = (hung[topp] || 0) + 1;
  }

  const bro = {};
  for (let topp of topping) {
    bro[topp] = (bro[topp] || 0) + 1;
    hung[topp] && (hung[topp] -= 1);
    if (hung[topp] === 0) delete hung[topp];
    if (Object.keys(hung).length === Object.keys(bro).length) answer++;
  }
  console.log(hung.get(1));
  return answer;
}

solution([1, 2, 1, 3, 1, 4, 1, 2]);
