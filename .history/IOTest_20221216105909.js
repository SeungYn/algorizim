'use strict';
let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

//커스텀 toString은 for...in을 사용해 열거할 수 있습니다.
for (let key in user) console.log(key); /