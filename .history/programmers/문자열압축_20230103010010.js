// function solution(s) {
//   var answer = Infinity;
//   for (let i = 1; i <= parseInt(s.length / 2) + 1; i++) {
//     let line = '';
//     let prev = s.slice(0, i);
//     let count = 1;
//     for (let j = i; j < s.length; j += i) {
//       const word = s.slice(j, j + i);
//       if (prev === word) count++;
//       else {
//         line += (count === 1 ? '' : count.toString()) + prev;
//         prev = word;
//         count = 1;
//       }
//     }
//     line += (count === 1 ? '' : count.toString()) + prev;

//     answer = Math.min(answer, line.length);
//   }
//   console.log(answer);
//   return answer;
// }

// solution('aabbaccc');

const solution = (s) => {
  const range = [...Array(s.length)].map((_, i) => i + 1);
  console.log(range);
  console.log(Math.min(...range.map((i) => compress(s, i).length)));
  return Math.min(...range.map((i) => compress(s, i).length));
};

const compress = (s, n) => {
  const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
  return make(
    chunk(s, n).reduce(
      ([a, l, c], e) => (e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1]),
      ['', '', 0]
    )
  );
};

const chunk = (s, n) =>
  s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];
solution('aabbaccc');

console.log(chunk('aabbc', 1));
