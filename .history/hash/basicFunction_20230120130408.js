function hash(str, len) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
    sum %= len;
  }
  return sum;
  return sum % len;
}

//조금 개선된 해시
function hash(str, len) {
  let sum = 0;
  const PRIME = 13;
  for (let i = 0; i < Math.min(str.length, 100); i++) {
    let value = str.charCodeAt(i);
    sum = (sum * PRIME + value) % len;
  }
  return sum;
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(str) {
    let sum = 0;
    const PRIME = 13;
    for (let i = 0; i < Math.min(str.length, 100); i++) {
      let value = str.charCodeAt(i);
      sum = (sum * PRIME + value) % this.keyMap.length;
    }
    return sum;
  }

  set(key, value) {
    const hashValue = hash(str);
    if (this.keyMap[hashValue] === undefined) {
    }
  }
}

console.log(hash('anatngsbrja', 10));
const a = new Array(10).map((i) => console.log(i));
console.log(a);
