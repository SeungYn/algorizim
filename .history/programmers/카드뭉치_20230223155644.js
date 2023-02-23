function solution(cards1, cards2, goal) {
  var answer = 'Yes';
  let card1Index = 0;
  let card2Index = 0;
  let goalIndex = 0;
  while (goalIndex < goal.length) {
    let find = false;
    if (goal[goalIndex] === cards1[card1Index]) {
      find = true;
      card1Index++;
    }

    if (!find && goal[goalIndex] === cards2[card2Index]) {
      find = true;
      card2Index++;
    }

    if (find) {
      goalIndex++;
    } else {
      answer = 'No';
      break;
    }
  }

  return answer;
}
