function slow(x) {
  console.log(`slow ${x}를 호출`);
  return x;
}

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
