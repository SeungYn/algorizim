// const graph = [[], [2, 3], [], [4], [5, 6], [3], []];
// console.log(graph);
// const visited = new Array(7).fill(false);
// const finished = new Array(7).fill(false);
// for (let i = 1; i <= 6; i++) {
//   console.log(dfs(i));
// }

// function dfs(start) {
//   visited[start] = true;

//   for (let next of graph[start]) {
//     if (!visited[next]) {
//       if (dfs(next)) return true;
//     }
//     if (visited[next]) {
//       if (!finished[next]) return true;
//     }
//   }

//   finished[start] = true;

//   return false;
// }

var canFinish = function (numCourses, prerequisites) {
  const map = {};
  for (let [from, to] of prerequisites) {
    if (map[from]) map[from].push(to);
    else map[from] = [to];
  }
  console.log(map);

  let visited = new Array(numCourses).fill(false);
  let finished = new Array(numCourses).fill(false);

  for (let i = 0; i < numCourses; i++) {
    visited = new Array(numCourses).fill(false);
    finished = new Array(numCourses).fill(false);

    //if (isCyclic(i)) return false;
    console.log('start::::>>>>>> ', i);
    console.log(isCyclic(i));
  }

  function isCyclic(start) {
    visited[start] = true;
    console.log(
      'top:: ',
      start,
      'visited:: ',
      visited,
      'finished:: ',
      finished
    );
    if (!map[start]) {
      finished[start] = true;
      return false;
    }

    for (let next of map[start]) {
      if (!visited[next]) {
        if (isCyclic(next)) return true;
      } else {
        if (!finished[next]) return true;
      }
    }
    finished[start] = true;
    console.log(
      'bottom::',
      start,
      'visited:: ',
      visited,
      'finished:: ',
      finished
    );
    return false;
  }

  return true;
};

canFinish(5, [
  [1, 4],
  [2, 4],
  [3, 1],
  [3, 2],
]);
