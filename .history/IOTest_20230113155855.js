let user = {
  firstName: 'John',
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

setTimeout(() => user.sayHi(), 1000); // Hello, undefined!
