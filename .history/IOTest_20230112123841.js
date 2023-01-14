function f(x) {
  console.log(x);
}

function delay(f, ms) {
  return () => {
    setTimeout(() => {
      f.apply(arguments);
    }, ms);
  };
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000('text', '123');
