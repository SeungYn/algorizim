var solution = (participant, completion) =>
  participant.find(
    (participant) => !completion[participant]--,
    completion.map((participant) => {
      completion[participant];
      return (completion[participant] = (completion[participant] | 0) + 1);
    })
  );

solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']);
