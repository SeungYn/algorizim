const user = {
  name: '1',
  toString() {
    return 'aaa';
  },
  valueOf() {
    return 111;
  },
};
console.log(user);
console.log(+user);
