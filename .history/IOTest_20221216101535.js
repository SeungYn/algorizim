'use strict';

let target = {};
let proxy = new Proxy(target, {}); // 빈 핸들러

proxy.test = 5; // 프락시에 값을 씁니다. -- (1)
console.log(target.test); // 5, target에 새로운 프로퍼티가 생겼네요!

console.log(proxy.test); // 5, 프락시를 사용해 값을 읽을 수도 있습니다. -- (2)

for (let key in proxy) console.log(key);
