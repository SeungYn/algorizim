function solution(survey, choices) {
  var answer = '';
  const types = ['RT', 'CF', 'JM', 'AN'];
  const map = {};

  types.forEach(([a, b]) => {
    map[a] = 0;
    map[b] = 0;
  });

  for (let i = 0; i < survey.length; i++) {
    const selectedNum = choices[i];
    const [leftCharacter, rightCharacter] = survey[i].split('');

    map[selectedNum < 4 ? leftCharacter : rightCharacter] += Math.abs(
      selectedNum - 4
    );
  }

  types.forEach(([a, b]) => {
    if (map[b] > map[a]) answer += b;
    else answer += a;
  });

  return answer;
}

// function solution(survey, choices) {
//     var answer = '';
//     const scores = [0, 3,2,1,0,1,2,3];
//     const map = {
//         'R': 0,
//         'T': 0,
//         'C': 0,
//         'F': 0,
//         'J': 0,
//         'M': 0,
//         'A': 0,
//         'N': 0,
//     }

//     for(let i = 0; i < survey.length; i++){
//         const selectedNum = choices[i];
//         const [leftCharacter, rightCharacter] = survey[i].split('');

//         if(selectedNum === 4) continue;
//         else if(selectedNum < 4){
//             map[leftCharacter] += scores[selectedNum];
//         }else{
//             map[rightCharacter] += scores[selectedNum];
//         }
//     }

//     for(const r of ['RT', 'CF', 'JM', 'AN']){
//         const [leftCharacter, rightCharacter] = r.split('');
//         const [leftCharScore, rightCharScore] = [map[leftCharacter], map[rightCharacter]];

//         if(leftCharScore > rightCharScore) answer += leftCharacter;
//         else if(leftCharScore < rightCharScore) answer += rightCharacter;
//         else{
//             if(leftCharacter < rightCharacter) answer += leftCharacter;
//             else answer += rightCharacter;
//         }

//     }

//     return answer;
// }

// function solution(survey, choices) {
//     const MBTI = {};
//     const types = ["RT","CF","JM","AN"];

//     types.forEach((type) =>
//         type.split('').forEach((char) => MBTI[char] = 0)
//     )

//     choices.forEach((choice, index) => {
//         const [disagree, agree] = survey[index];

//         MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
//     });

//     return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
// }
