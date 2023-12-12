// 투포인터 풀이
var reverseVowels = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  const str = [...s];

  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    while (start < end && !vowels.includes(str[start])) {
      start++;
    }

    while (end > 0 && !vowels.includes(str[end])) {
      end--;
    }

    if (start > end) break;

    const copy = str[start];
    str[start] = str[end];
    str[end] = copy;

    start++;
    end--;
  }

  return str.join('');
};

// 첫 번쨰 풀이
var reverseVowels = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  const vowelsIndex = [];
  const targetVowels = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowelsIndex.push(i);
      targetVowels.push(s[i]);
    }
  }

  targetVowels.reverse();
  let index = 0;
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (vowelsIndex.includes(i)) {
      result += targetVowels[index];
      index++;
    } else result += s[i];
  }
  return result;
};
