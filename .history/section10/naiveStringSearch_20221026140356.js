function naiveSearch(str, target) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (str[i] === target[i]) {
        i++;
        if (j == target.length - 1) {
          count++;
          break;
        }
      }
    }
  }
  console.log(count);
}

naiveSearch('addaaaada', 'da');
/**
 * 처음에 문자열 for
 * 	첫번째 문자랑 target의 첫번째 문자를 비교
 * 		맞으면 다음문자 비교
 * 		틀리면 다음문자부터 시작
 */
