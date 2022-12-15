var solution = (participant, completion) =>
  participant.find(
    (participant) => !completion[participant]--,
    completion.map((participant) => {
      console.log(completion);
      console.log(completion[participant]);
      return (completion[participant] = (completion[participant] | 0) + 1);
    })
  );

solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']);

let a = 2;
console.log(!a);
