let john = { name: 'John' };

let map = new Map();
map.set(john, '...');

john = null; // 참조를 null로 덮어씀
console.log(map);
