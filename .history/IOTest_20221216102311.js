let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // 기본값
    }
  },
});

console.log(numbers[2]);
console.log(numbers[233]);
let dictionary = {
  Hello: '안녕하세요',
  Bye: '안녕히 가세요',
};

dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    // 프로퍼티를 읽기를 가로챕니다.
    if (phrase in target) {
      // 조건: 사전에 구절이 있는 경우
      return target[phrase]; // 번역문을 반환합니다
    } else {
      // 구절이 없는 경우엔 구절 그대로를 반환합니다.
      return phrase;
    }
  },
});

// 사전을 검색해봅시다!
// 사전에 없는 구절을 입력하면 입력값이 그대로 반환됩니다.
console.log(dictionary['Hello']); // 안녕하세요
console.log(dictionary['Welcome to Proxy']); // Welcome to Proxy (입력값이 그대로 출력됨)
