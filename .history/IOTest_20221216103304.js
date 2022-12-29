let user = {
  name: 'John',
  age: 30,
  _password: '***',
};

user = new Proxy(user, {
  ownKeyss(target) {
    return Object.keys(target).filter((key) => !key.startsWith('_'));
  },
});

// "ownKeys" 트랩은 _password를 건너뜁니다.
for (let key in user) console.log(key); // name, age

// 아래 두 메서드에도 동일한 로직이 적용됩니다.
console.log(Object.keys(user)); // name,age
console.log(Object.values(user)); // John,30
