function solution(record) {
  var answer = [];
  const users = {};
  for (let i = 0; i < record.length; i++) {
    const [type, id, name] = record[i].split(' ');

    if (!name) continue;
    users[id] = name;
  }

  for (let i = 0; i < record.length; i++) {
    const [type, id, name] = record[i].split(' ');
    if (type === 'Enter') {
      answer.push(`${users[id]}님이 들어왔습니다.`);
    } else if (type === 'Leave') {
      answer.push(`${users[id]}님이 나갔습니다.`);
    }
  }

  return answer;
}
