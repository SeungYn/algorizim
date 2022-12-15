let john = { name: 'John' };

let map = new Map();
map.set(john, '...');

john = null; // 참조를 null로 덮어씀
console.log(map);

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, 'ok'); //정상적으로 동작합니다(객체 키).

// 문자열("test")은 키로 사용할 수 없습니다.
weakMap.set('test', 'Whoops');
