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

// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     console.log(`slow ${x}를 호출`);
//     console.log(this);
//     return x * this.someMethod();
//   },
//   a: () => {
//     console.log(this);
//   },
// };

// function cachingDecorator(func) {
//   let cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }

//     let result = func.call(this, x);
//     cache.set(x, result);
//     return result;
//   };
// }

// worker.slow = cachingDecorator(worker.slow);
// console.log(worker.slow(1));

let worker = {
  slow(min, max) {
    return min + max;
  },
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function () {
    let key = hash(arguments);

    if (cache.has(key)) {
      return cache.get(key);
    }

    //let result = func.call(this, ...arguments);
    let result = func.apply(this, arguments);
    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
}

console.log(hash([1, 2]));
