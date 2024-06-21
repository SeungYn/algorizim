/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const map = {};
  const result = [];

  for (let [start, end] of tickets) {
    if (map[start]) map[start].push(end);
    else map[start] = [end];
  }

  for (let a in map) {
    map[a].sort();
  }
  console.log(map);
  dfs('JFK');
  function dfs(start) {
    console.log(start, map[start]);
    while (map[start] && map[start].length > 0) {
      dfs(map[start].shift());
    }
    console.log('돌아옴', start, map[start]);
    result.unshift(start);
  }

  return result;
};
