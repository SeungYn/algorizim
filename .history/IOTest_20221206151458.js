let obj = {
  name: 'John',
  age: 30,
};

let map = new Map(Object.entries(obj));
console.log(map);
console.log(map.entries());
const o = Object.fromEntries(map.entries());
console.log(o);
