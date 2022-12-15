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
const a = { c: 1, b: 1 };
for (let entry of Object.entries(a)) {
  // recipeMap.entries()와 동일합니다.
  console.log(entry); // cucumber,500 ...
}

1;
2;
var solution = (participant, completion) =>
  participant.find(
    (participant) => !completion[participant]--,
    completion.map((participant) => {
      return (completion[participant] = (completion[participant] | 0) + 1);
    })
  );

[].find;
