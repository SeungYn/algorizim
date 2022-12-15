function naiveSearch(str, target) {
  for (let item of str) {
    console.log(item);
  }
}

naiveSearch('addaaaada', 'da');
/**
 * 처음에 문자열 for
 * 	첫번째 문자랑 target의 첫번째 문자를 비교
 * 		맞으면 다음문자 비교
 * 		틀리면 다음문자부터 시작
 */
