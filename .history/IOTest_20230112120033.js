// function slow(x) {
//   console.log(`slow ${x}를 호출`);
//   return x;
// }

// function cachingDecorator(func) {
//   let cache = new Map();

//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }

//     let result = func(x);

//     cache.set(x, result);
//     return result;
//   };
// }

// slow = cachingDecorator(slow);

// console.log(slow(1));
// console.log(slow(1));

// console.log(slow(2));
// console.log(slow(2));

let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log(`slow ${x}를 호출`);
    return x * this.someMethod();
  },
};

function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
    return result;
  };
}
