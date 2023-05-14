function solution(cacheSize, cities) {
  var answer = 0;
  const HIT = 1,
    MISS = 5;

  if (cacheSize === 0) return cities.length * MISS;

  let q = [];

  for (let city of cities) {
    city = city.toLowerCase();

    const cacheIndex = q.indexOf(city);
    if (cacheIndex > -1) {
      q.splice(cacheIndex, 1);
      answer += HIT;
    } else {
      if (q.length >= cacheSize) q.shift();
      answer += MISS;
    }
    q.push(city);
  }

  return answer;
}
