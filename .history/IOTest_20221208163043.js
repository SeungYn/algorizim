let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

// [키, 값] 쌍을 대상으로 순회합니다.
for (let entry of recipeMap) {
  // recipeMap.entries()와 동일합니다.
  console.log(entry); // cucumber,500 ...
}
