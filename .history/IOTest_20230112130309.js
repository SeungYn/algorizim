const user = {
  firstName: 'jjj',
  sayHi() {
    console.log(this.firstName);
  },
};
let a = user.sayHi;
console.log(a());
setTimeout(() => {
  user.sayHi();
}, 100);
