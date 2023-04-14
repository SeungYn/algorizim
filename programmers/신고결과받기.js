function solution(id_list, report, k) {
  var answer = [];
  const reports = [...new Set(report)].map((id) => id.split(' '));
  const reportMap = {};
  const reportedMap = {};

  for (const report of reports) {
    const [a, b] = report;
    reportedMap[b] = reportedMap[b] + 1 || 1;
  }

  for (const report of reports) {
    const [a, b] = report;
    if (reportedMap[b] >= k) {
      reportMap[a] = reportMap[a] + 1 || 1;
    }
  }

  console.log(reports);
  console.log(reportMap);
  console.log(reportedMap);

  return id_list.map((id) => reportMap[id] || 0);
}

// function solution(id_list, report, k) {
//   var answer = [];
//   const map = {};
//   const reportedMap = {};

//   id_list.forEach((a) => {
//     map[a] = new Set(); //신고자 기준 set 세팅
//     reportedMap[a] = 0; // 신고당한 사람 count map 세팅
//   });

//   report.forEach((str) => {
//     const [a, b] = str.split(' ');
//     map[a].add(b); // 신고한 사람이 누굴 신고했는지 set에 추가 중복 방지
//   });

//   for (const key in map) {
//     const list = map[key].values(); // 신고한 사람이 신고 당한 사람 리스트 가져옴

//     for (const pe of list) {
//       // 신고 당한 사람 count 증가
//       reportedMap[pe] = reportedMap[pe] + 1 || 0;
//     }
//   }

//   console.log(map);
//   console.log(reportedMap);

//   return id_list.map((id) => {
//     const list = [...map[id].values()]; // 신고한 사람의 신고 당한 사람 리스트
//     let sum = 0;
//     for (const id of list) {
//       // 하나 씩 돌아서 k 기준 이상이면 sum에 계속 더해줌
//       if (reportedMap[id] >= k) sum += 1;
//     }
//     return sum;
//   });
// }

solution(
  ['muzi', 'frodo', 'apeach', 'neo'],
  ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
  2
);
