const user = {
  firstName: 'jjj',
  sayHi() {
    console.log(this.firstName);
  },
};
let a = user.sayHi;

setTimeout(() => {
  user.sayHi();
}, 100);
