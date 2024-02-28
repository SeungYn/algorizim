function solution(orders, course) {
  var answer = [];
  const dishMap = {};

  for (let i = 0; i < orders.length; i++) {
    dfs(orders[i], [], 0);
  }

  for (const n of course) {
    const keys = Object.keys(dishMap);
    let max = 1;
    let result = [];
    for (let key of keys) {
      if (key.length !== n || dishMap[key] === 1) continue;
      if (dishMap[key] > max) {
        max = dishMap[key];
        result = [key];
      } else if (dishMap[key] === max) result.push(key);
    }

    answer.push(result);
  }
  console.log(answer.flat().sort());

  function dfs(order, list, dep) {
    const menus = [...list].sort().join('');
    if (list.length >= 2) {
      dishMap[menus] = (dishMap[menus] || 0) + 1;
    }

    for (let i = dep; i < order.length; i++) {
      list.push(order[i]);
      dfs(order, list, i + 1);
      list.pop();
    }
  }
  return answer.flat().sort();
}
