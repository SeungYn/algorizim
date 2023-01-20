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
    this.keyMap = Array.from({ length: size }, (v, i) => []);
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
    const hashValue = hash(key);
    const hashStore = this.keyMap[hashValue];
    const index = isExist(hashStore, key);
    if (index) {
      hashStore[key] = value;
      return;
    }
    hashStore.push({ key, value });
    return;
  }

  isExist(hashMap, key) {
    return hashMap.findIndex((item) => item.key === key);
  }
}

console.log(hash('anatngsbrja', 10));
const a = Array.from({ length: 10 }, (v, i) => new Array());
console.log(a);
