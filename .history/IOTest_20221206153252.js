let john = { name: 'John' };

let array = [john];

john = null; // 참조를 null로 덮어씀
console.log(john);
