let user = {
  firstName: 'John',
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

let sayHi = user.sayHi.bind(user);

setTimeout(() => sayHi(), 1000); // Hello, John!
user = {
  sayHi() {
    console.log('또 다른 사용자!');
  },
};
