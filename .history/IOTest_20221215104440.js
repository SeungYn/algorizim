'use strict';
function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();

console.log(user);

const a = {
  b: 1,
  c: this,
  d() {
    return this;
  },
};

console.log(a);
console.log(a.c);
