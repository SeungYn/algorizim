function f(x) {
  console.log(x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000('text');
