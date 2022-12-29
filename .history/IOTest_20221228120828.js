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

nums = new Proxy(nums, {
  set(target, prop, value) {
    console.log(target, prop, value);
    if (typeof value !== 'number') return false;
    target[prop] = value;
    return true;
  },
});

console.log((nums[1] = 3));
console.log(nums.push(11));

let user = {
  name: 'John',
  age: 30,
  _password: '***',
};

console.log(Object.getOwnPropertyNames(user));
console.log(Object.getOwnPropertySymbols(user));
console.log(Object.keys(user));
console.log(Object.values(user));

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).fillter((key) => !key.startsWith('_'));
  },
});

for (let key in user) console.log(key);
