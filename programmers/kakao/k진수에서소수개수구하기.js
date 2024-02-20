function solution(n, k) {
  var answer = 0;

  const reg = /[^0]*/g;
  const matchArr = n.toString(k).match(reg);

  for (let v of matchArr) {
    if (v === '' || v === '1') continue;

    if (isPrime(+v)) answer++;
  }
  return answer;
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}
