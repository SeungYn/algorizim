let user = {
  firstName: 'John',
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

let sayHi = user.sayHi.bind(user); // (*)

// 이제 객체 없이도 객체 메서드를 호출할 수 있습니다.
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// 1초 이내에 user 값이 변화해도
// sayHi는 기존 값을 사용합니다.
user = {
  sayHi() {
    console.log('또 다른 사용자!');
  },
};
