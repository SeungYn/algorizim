var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let answer = 0;
  let start = (end = 0);

  while (start < s.length && end < s.length) {
    const str = s[end];
    console.log(start, end);
    while (set.has(str)) {
      set.delete(s[start]);
      start++;
    }
    set.add(str);
    answer = Math.max(answer, end - start + 1);
    end++;
  }
};

lengthOfLongestSubstring('abcabcbb');
