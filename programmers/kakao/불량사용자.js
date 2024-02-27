function solution(user_id, banned_id) {
  var answer = 0;
  const result = [];

  banned_id.forEach((str) => {
    const reg = new RegExp(`^${str.replaceAll('*', '.')}$`, 'g');

    const arr = [];
    user_id.forEach((st) => {
      const regRes = st.match(reg);

      if (regRes) arr.push(regRes[0]);
    });

    result.push(arr);
  });
  console.log(result);
  const set = new Set();
  dfs(result, 0, []);

  console.log(set);
  function dfs(list, dep, current) {
    if (dep === list.length) {
      set.add([...current].sort().join(''));
      answer++;
      return;
    }

    for (const str of list[dep]) {
      if (current.includes(str)) continue;
      current.push(str);
      dfs(list, dep + 1, current);
      current.pop();
    }
  }

  return set.size;
}
