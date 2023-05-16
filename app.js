function functionalSafeMoneyBag() {
  let money = 0;

  function donate(val) {
    money += val;
    console.log(`${val}원이 기부됨, 현재 누적 금액: ${money}`);
  }

  return donate;
}

const donate = functionalSafeMoneyBag();
// 1000원 기부
donate(1000);
// 2000원 기부
donate(2000);
// 2000원 기부
donate(2000);
// 2000원 기부
donate(2000);
