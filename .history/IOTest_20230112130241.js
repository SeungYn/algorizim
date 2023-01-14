const user = {
  firstName: 'jjj',
  sayHi() {
    console.log(this.firstName);
  },
};

setTimeout(() => {
  console.log(this);
  user.sayHi();
}, 100);
