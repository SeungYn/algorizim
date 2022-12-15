function sayHi() {
  console.log(this);
}
const sayHi = () => {
  console.log(this);
};
sayHi(); // undefined
