let user = {
  firstName: 'John',
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

let sayHi = user.sayHi;

setTimeout(() => user.sayHi(), 1000); // Hello, John!
