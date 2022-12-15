function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();
console.log(generator);
let one = generator.next();
let two = generator.next();
let three = generator.next();
console.log(three);
