// function solution(places) {
//   var answer = [];
//   const dx = [-1, 1, 0, 0];
//   const dy = [0, 0, -1, 1];

//   for (let list of places) {
//     let flag = true;
//     const room = list.map((i) => i.split(''));

//     for (let i = 0; i < 5; i++) {
//       if (!flag) break;
//       for (let j = 0; j < 5; j++) {
//         if (room[i][j] === 'P') {
//           for (let k = 0; k < 4; k++) {
//             let nx = i + dx[k];
//             let ny = j + dy[k];

//             if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
//               if (room[nx][ny] === 'P') {
//                 flag = false;
//                 //console.log(i, dx[k], j, dy[k], nx, ny);
//                 //console.log(flag, i, j, room[nx][ny], nx, ny, dx[k], dy[k]);
//                 break;
//               }
//             }
//           }
//         }
//         if (room[i][j] === 'O') {
//           let pCount = 0;
//           for (let k = 0; k < 4; k++) {
//             let nx = i + dx[k];
//             let ny = j + dy[k];

//             if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
//               if (room[nx][ny] === 'P') pCount += 1;
//               if (pCount >= 2) {
//                 flag = false;
//                 break;
//               }
//             }
//           }
//         }
//       }
//     }

//     flag ? answer.push(1) : answer.push(0);
//   }
//   return answer;
// }

function solution(places) {
  const answer = [];
  for (let list of places) {
    const room = list.map((i) => i.split(''));

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (room[i][j] !== 'P') continue;
        const result = bfs(room, i, j);
      }
    }
  }
}

const bfs = (list, i, j) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const q = [[i, j]];
  while (q.length > 0) {
    const [x, y] = q.shift();
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;

      const target = list[nx][ny];
      const distance = Math.abs(nx - i) + Math.abs(ny - j);
      if (target === 'P' && distance < 2) return false;
      else if (target === 'O' && distance < 2) {
        q.push([nx, ny]);
      }
    }
  }
};
console.log(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
  ])
);

/**
대기실 5 크기는 5*5
맨해튼 거리는 2 이하로 앉으면 안됨
단 응시자가 앉아있는 자리 사이에 파티션으로 막혀 있을 경우에는 허용 즉 가림막이 있는경우는 2이하여도 허용

앉는건 p 파티션 두개 사이도 허용 빈테이블은 O X는 파티션 의미
일단 P일 때는 상하좌우를 체크해서 P가 있으면 실패
O일 때는 상하좌우를 체크하는데 P가 2개면 실패
**/
/**
 * p가 오면 사방 탐색 P 존재하면 실패
 * 사방 탐색중 O 발견
 */
