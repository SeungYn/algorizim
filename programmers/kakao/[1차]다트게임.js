function solution(dartResult) {
  var answer = 0;
  const bonus = { S: 1, D: 2, T: 3 };
  const options = { '*': 2, '#': -1, undefined: 1 };
  const reg = /[0-9]+[A-Z][\*\#]?/g;
  const gameList = dartResult.match(reg);
  const scores = [];

  for (let i = 0; i < gameList.length; i++) {
    const splitReg = /(\d{1,})([SDT])([\*\#])?/;
    const [_, num, bo, op] = gameList[i].match(splitReg);

    const score = Math.pow(+num, bonus[bo]) * options[op];
    if (i !== 0 && op === '*') scores[i - 1] *= options[op];
    console.log(score);
    scores.push(score);
  }

  return scores.reduce((p, c) => p + c);
}

// function solution(dartResult) {
//     var answer = 0;
//     const reg = /(\d+[DST][\*\#]?)/gm;
//     const result = [];
//     const dartArr = dartResult.match(reg);

//     for(let set of dartArr){
//         let score = '';
//         for(let s of set){
//            if(!isNaN(s)){
//                score+= s;
//                continue;
//            }

//             score = parseInt(score);
//             if(['S','D','T'].includes(s)){
//                 if(s === 'D') score = score**2;
//                 else if(s === 'T') score = score**3;
//             }

//             if(['*','#'].includes(s)){
//                 if(s === '*'){
//                     if(result.length > 0) result[result.length-1] *=2;
//                     score *=2;
//                 }else{
//                     score *= -1;
//                 }
//             }
//         }
//         result.push(score);
//     }

//     return result.reduce((p,c)=>p+c, 0);

// }

// function solution(dartResult) {
//     const bonus = { 'S': 1, 'D': 2, 'T': 3 },
//           options = { '*': 2, '#': -1, undefined: 1 };

//     let darts = dartResult.match(/\d.?\D/g);

//     for (let i = 0; i < darts.length; i++) {
//         let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
//             score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

//         if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

//         darts[i] = score;
//     }

//     return darts.reduce((a, b) => a + b);
// }
