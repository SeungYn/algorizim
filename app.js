function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = [];
  const rectContext = rectangle.map((rect, i) => [i, ...rect]);
  const visited = new Set();
  const q = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  for (let i = 0; i < rectContext.length; i++) {
    const [ctx, x1, y1, x2, y2] = rectContext[i];
    if (
      x1 <= characterX &&
      characterX <= x2 &&
      (y1 === characterY || y2 === characterY)
    ) {
      q.push([i, characterX, characterY, 0]);
      break;
    }
    if (
      y1 <= characterY &&
      characterY <= y2 &&
      (x1 === characterX || x2 === characterX)
    ) {
      q.push([i, characterX, characterY, 0]);
      break;
    }
  }
  visited.add(`${characterX},${characterY}`);
  console.log(q);
  while (q.length > 0) {
    const [context, x, y, dist] = q.shift();

    if (x === itemX && y === itemY) {
      visited.delete(`${x},${y}`);
      answer.push(dist);
      continue;
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [dx[i] + x, dy[i] + y];
      const nextContexts = findNextRects(rectContext, x, y, nx, ny);

      console.log(nextContexts);

      if (visited.has(`${nx},${ny}`)) continue;
      if (nextContexts.leneth === 0) continue;

      for (let j = 0; j < nextContexts.length; j++) {
        if (
          isRectLine(rectContext, x, y, nx, ny, nextContexts[j]) &&
          !isRectInnerContains(rectContext, nx, ny)
        ) {
          visited.add(`${nx},${ny}`);
          q.push([context, nx, ny, dist + 1]);
          break;
        }
      }
    }
  }
  console.log(visited);
  console.log(answer);
  return answer;
}

function isRectInnerContains(rectContext, x, y) {
  for (let i = 0; i < rectContext.length; i++) {
    const [_, x1, y1, x2, y2] = rectContext[i];
    if (x1 < x && x < x2 && y1 < y && y < y2) {
      return true;
    }
  }

  return false;
}

function findNextRects(rectContext, x, y, nx, ny) {
  const result = [];
  for (let i = 0; i < rectContext.length; i++) {
    console.log(x, y, nx, ny, isRectLine(rectContext, x, y, nx, ny, i));
    if (isRectLine(rectContext, x, y, nx, ny, i)) result.push(i);
  }
  //console.log(result);
  return result;
}

// 두점으로 확인해 줘야됨
function isRectLine(rectContext, x, y, nx, ny, ctx) {
  const [context, x1, y1, x2, y2] = rectContext[ctx];
  if (x === nx) {
    if (x1 !== x && x2 !== x) return false;
    if (y1 <= y && y <= y2 && y1 <= ny && ny <= y2) return true;
  } else {
    if (y1 !== y && y2 !== y) return false;
    if (x1 <= x && x <= x2 && x1 <= nx && nx <= x2) return true;
  }

  return false;
}
solution(
  [
    [1, 1, 7, 4],
    [3, 2, 5, 5],
    [4, 3, 6, 9],
    [2, 6, 8, 8],
  ],
  1,
  3,
  7,
  8
);
