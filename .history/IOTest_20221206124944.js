let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
  test() {
    console.log(this);
  },
};

let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// army.canJoin 호출 시 참을 반환해주는 user를 찾음
let soldiers = users.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23
army.test();
const a = army.test;
console.log(a);
