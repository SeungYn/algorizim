function solution(N, stages) {
  var answer = [];
  let len = stages.length;

  for (let i = 1; i < N + 1; i++) {
    const stayedCount = stages.filter((v) => v === i).length;

    if (stayedCount === 0) {
      answer.push([i, 0]);
    } else {
      answer.push([i, stayedCount / len]);
    }
    len -= stayedCount;
  }

  answer.sort((a, b) => {
    if (b[1] - a[1] === 0) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });

  return answer.map((v) => v[0]);
}

// function solution(N, stages) {
//     var answer = [];

//     for(let i = 1; i < N+1; i++){
//         const stayedCount = stages.filter(v=> v === i ).length;
//         const challengeCount = stages.filter(v=> v >= i ).length;
//         if(stayedCount === 0) {
//             answer.push([i,0]);
//         }else{
//             answer.push([i,stayedCount/challengeCount]);
//         }
//     }

//     answer.sort((a,b)=>{
//         if(b[1] - a[1] === 0){
//             return a[0] - b[0];
//         }
//         return b[1] - a[1];
//     })

//     return answer.map((v)=> v[0]);
// }
