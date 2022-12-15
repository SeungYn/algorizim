let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

console.log(Object.entries(prices).map(([key, value]) => [key, value * 2]));

let doublePrices = Object.fromEntries(
  // 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 다시 객체로 되돌립니다.
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);
