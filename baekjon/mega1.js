// function solution(n, trains, bookings) {
//   console.log(n, trains, bookings);

//   for (let booking of bookings) {
//     const [a, b] = booking;
//     for (let train of trains) {
//       const [s, e, k] = train;
//     }
//   }
// }

// solution(
//   5,
//   [
//     [1, 5, 2],
//     [2, 3, 1],
//   ],
//   [
//     [1, 5],
//     [1, 3],
//     [2, 5],
//     [2, 4],
//     [2, 4],
//     [3, 5],
//     [4, 5],
//   ]
// );
const n = 5;
const trains = [
  [1, 5, 2],
  [2, 3, 1],
];
const bookings = [
  [1, 5],
  [1, 3],
  [2, 5],
  [2, 4],
  [2, 4],
  [3, 5],
  [4, 5],
];
const stationCapacity = new Array(n + 1).fill(0); // 각 역의 승차 인원과 하차 인원을 저장할 배열

for (const booking of bookings) {
  const [start, end] = booking;
  stationCapacity[start]++; // 승차 인원 증가
  if (end < n) stationCapacity[end + 1]--; // 하차 인원 증가
}

console.log(stationCapacity); // 각 역의 승차 인원과 하차 인원 출력
const cumulativeCapacity = new Array(n + 1).fill(0); // 각 역에서의 누적 승차 인원을 저장할 배열

let maxCapacity = 0; // 가장 많은 승차 인원을 가진 역의 승차 인원
let maxCapacityStation = 0; // 가장 많은 승차 인원을 가진 역의 번호

for (let i = 1; i <= n; i++) {
  cumulativeCapacity[i] = cumulativeCapacity[i - 1] + stationCapacity[i];
  if (cumulativeCapacity[i] > maxCapacity) {
    maxCapacity = cumulativeCapacity[i];
    maxCapacityStation = i;
  }
}

console.log('가장 많은 승차 인원을 가진 역:', maxCapacityStation);
const result = [];

for (const booking of bookings) {
  const [start, end] = booking;
  const trainCapacity = trains.find(
    (train) => train[0] === start && train[1] === end
  )[0];
  const currentCapacity =
    cumulativeCapacity[start] - cumulativeCapacity[end - 1];

  if (currentCapacity < trainCapacity) {
    result.push(1);
  } else {
    result.push(0);
  }
}

console.log('예약 결과:', result);
