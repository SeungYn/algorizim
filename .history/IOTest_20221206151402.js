let obj = {
  name: 'John',
  age: 30,
};
console.log(obj.keys());
let map = new Map(Object.entries(obj));
console.log(map);
console.log(map.entries());
