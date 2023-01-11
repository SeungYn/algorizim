function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let c1 = makeCounter();

console.log(counter());
console.log(counter());
console.log(c1());
console.log(c1());
