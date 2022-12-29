function curry(func) {
  return function curried(...args) {
    console.log(args);
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        console.log(args2);
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
