function sayHi() {
  sayHi.counter++;
}

sayHi.counter = 0;

sayHi();
sayHi();
sayHi();
console.log(sayHi.counter);
