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
    return Object.keys(target).filter((key) => !key.startsWith('_'));
  },
});

for (let key in user) console.log(key);

let user2 = {};

console.clear();
user2 = new Proxy(user2, {
  ownKeys(target) {
    // 프로퍼티 리스트를 얻을 때 딱 한 번 호출됩니다.
    return ['a', 'b', 'c'];
  },

  getOwnPropertyDescriptor(target, prop) {
    // 모든 프로퍼티를 대상으로 호출됩니다.
    console.log(target, prop);
    return {
      enumerable: true,
      configurable: true,
      /* 이 외의 플래그도 반환할 수 있습니다. "value:..."도 가능합니다. */
    };
  },
});

console.log(Object.keys(user2)); // a, b, c
console.clear();

let user3 = {
  name: 'John',
  _password: '비밀',
  fn1() {
    console.log(this);
    console.log('나는 함수');
  },
};

user3 = new Proxy(user3, {
  get(target, prop) {
    if (prop.startsWith('_')) throw new Error('왜 비밀을 보려고 하세요!');
    let value = target[prop];
    return typeof value === 'function' ? value.bind(target) : value;
  },
  set(target, prop, val) {
    // 프로퍼티 쓰기를 가로챕니다.
    if (prop.startsWith('_')) {
      throw new Error('접근이 제한되어있습니다.');
    } else {
      target[prop] = val;
      return true;
    }
  },
  deleteProperty(target, prop) {
    // 프로퍼티 삭제를 가로챕니다.
    if (prop.startsWith('_')) {
      throw new Error('접근이 제한되어있습니다.');
    } else {
      delete target[prop];
      return true;
    }
  },
  ownKeys(target) {
    // 프로퍼티 순회를 가로챕니다.
    return Object.keys(target).filter((key) => !key.startsWith('_'));
  },
});
console.log(user3.fn1());
const test = user3.fn1;
console.log(test());

console.clear();
function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

console.log(sayHi.length); // 1 (함수 정의부에서 명시한 인수의 개수)

sayHi = delay(sayHi, 3000);

console.log(sayHi.length); // 0 (래퍼 함수 정의부엔 인수가 없음)

console.clear();

function delay2(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      console.log(target, thisArg, args);
      setTimeout(() => target.apply(thisArg, args), ms);
    },
  });
}

function sayHi2(user) {
  console.log(`Hello, ${user}!`);
}

sayHi2 = delay2(sayHi2, 3000);

console.log(sayHi2.length); // 1 (*) 프락시는 "get length" 연산까지 타깃 객체에 전달해줍니다.

sayHi2('John'); // Hello, John! (3초 후)
console.clear();

let array = [1, 2, 3];

array = new Proxy(array, {
  /* 여기에 코드를 작성하세요. */
  get(array, prop) {
    prop = Number(prop);

    if (prop < 0) return array[array.length + prop];
    return array[prop];
  },
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2
