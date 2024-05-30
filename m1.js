//'use strict';

const a = new Date();
console.log(a.getTimezoneOffset());
const b = a.getTime() + a.getTimezoneOffset() * 60 * 1000;
console.log(new Date(b));
console.log(eval('1 + 3'));
name = 3;
var test = 45;
console.log(globalThis);

const q = (function () {
  let value = 0;

  function up() {
    value++;
    return value;
  }

  function getValue() {
    return value;
  }

  return {
    up,
    getValue,
  };
})();

console.log(q.up());
console.log(q.up());
console.log(q.up());
console.log(q.up());
console.log(q.up());
console.log(q.up());
console.log(q.getValue());
