const user = {
  firstName: 'jjj',
  sayHi() {
    console.log(this.firstName);
  },
};

setTimeout(user.sayHi, 100);
