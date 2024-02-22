function solution(fees, records) {
  var answer = [];
  const recordsMap = {};
  const [basisTime, basisFee, unitTime, unitFee] = fees.map(Number);

  for (let i = 0; i < records.length; i++) {
    const [t, n, o] = records[i].split(' ');
    if (!recordsMap[n]) recordsMap[n] = 0;
    if (o === 'IN') recordsMap[n] += 1439 - translateMinute(t);
    else recordsMap[n] -= 1439 - translateMinute(t);
  }

  for (let key in recordsMap) {
    const accumulatedTime = recordsMap[key];
    let fee = 0;

    if (accumulatedTime <= basisTime) fee = basisFee;
    else {
      const differenceTime = accumulatedTime - basisTime;
      fee = basisFee + Math.ceil(differenceTime / unitTime) * unitFee;
    }

    answer.push([key, fee]);
  }
  answer.sort((a, b) => a[0] - b[0]);
  console.log(answer);

  return answer.map((r) => r[1]);
}

// function solution(fees, records) {
//     var answer = [];
//     const recordsMap = {};
//     const [basisTime, basisFee, unitTime, unitFee] = fees.map(Number);

//     for(let i = 0; i < records.length; i++){
//         const [t,n,o] = records[i].split(' ');
//         recordsMap[n] ? recordsMap[n].push([t,o]) : recordsMap[n] = [[t,o]];
//     }

//     for(let key in recordsMap){
//         const usedList = recordsMap[key];
//         if(usedList.length % 2) usedList.push(['23:59', 'out']);

//         let accumulatedTime = 0;
//         let fee = 0;

//         for(let i = 0; i < usedList.length; i+=2){
//             const usedTime = translateMinute(usedList[i+1][0]) - translateMinute(usedList[i][0]);
//             accumulatedTime += usedTime;
//             // if(usedTime <= basisTime) fee += basisFee;
//             // else{
//             //     const differenceTime = usedTime - basisTime;
//             //     fee += basisFee + (Math.ceil(differenceTime / unitTime) * unitFee);
//             // }
//         }

//         if(accumulatedTime <= basisTime) fee = basisFee;
//         else{
//             const differenceTime = accumulatedTime - basisTime;
//             fee = basisFee + (Math.ceil(differenceTime / unitTime) * unitFee);
//         }

//         answer.push([key, fee]);
//     }
//     answer.sort((a,b)=> a[0] - b[0]);
//     console.log(answer);

//     return answer.map(r=>r[1]);
// }

function translateMinute(time) {
  const [h, m] = time.split(':').map(Number);

  return h * 60 + m;
}
