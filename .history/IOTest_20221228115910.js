let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0;
    }
  },
});

console.log(numbers[1]);
console.log(numbers[111]);

let dictionary = {
  Hello: '안녕하세요',
  Bye: '안녕히 가세요',
};

console.log(dictionary['Hello']);
console.log(dictionary['Bye']);
console.log(dictionary['Helloa']);

dictionary = new Proxy(dictionary, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return prop;
    }
  },
});

console.log(dictionary['a']);
console.clear();
let nums = [];

numbers = new Proxy(nums, {
  set(target, prop, value, rec) {
    if (typeof prop !== 'number') return false;
    target[prop] = value;
    return true;
  },
});

console.log(numbers.push(11));
