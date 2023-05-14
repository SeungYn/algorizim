function solution(begin, target, words) {
  var answer = 0;

  function dfs(words, target, now, count) {
    console.log(target, now, count);

    if (target === now) {
      answer = Math.min(answer, count);
      return;
    }

    for (let i = 0; i < words.length; i++) {
      if (check(now, words[i])) dfs(words, target, words[i], count + 1);
    }
  }

  dfs(words, target, begin, 0);

  return answer;
}

function check(origin, target) {
  let cnt = 0;
  for (let i = 0; i < origin.length; i++) {
    if (origin[i] !== target[i]) cnt++;
    if (cnt >= 2) return false;
  }
  return true;
}

solution([1, 1, 1, 1, 1], 3);
