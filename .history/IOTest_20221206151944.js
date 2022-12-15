function unique(arr) {
  /* 제출 답안 */
  const set = new Set(arr);
  return set;
}

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log(unique(values));
