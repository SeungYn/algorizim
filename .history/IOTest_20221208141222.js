const user = {
  name: '1',
  toString() {
    return 'aaa';
  },
  valueOf() {
    return 111;
  },
};
const user2 = { a: '1' };
console.log(user);
console.log(user2);
