function curry(func) {
  return function curried(...args) {
    console.log(args, 'args');
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        console.log(args2, 'args2', args, 'args');
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);
console.log(sum([1, 2, 3]));
console.log(curriedSum(1)(2, 3));

function curry2(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(args);
    } else {
      return function (...args2) {
        return curry2(args.concat(args2));
      };
    }
  };
}
