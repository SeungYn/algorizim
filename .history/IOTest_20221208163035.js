let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

// 키(vegetable)를 대상으로 순회합니다.
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// 값(amount)을 대상으로 순회합니다.
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// [키, 값] 쌍을 대상으로 순회합니다.
for (let entry of recipeMap) {
  // recipeMap.entries()와 동일합니다.
  alert(entry); // cucumber,500 ...
}
