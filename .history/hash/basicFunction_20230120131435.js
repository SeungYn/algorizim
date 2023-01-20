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
    const hashValue = hash(str);
    const hashStore = this.keyMap[hashValue];
    if (hashStore.push({ key, value })) {
      hashStore[key] = value;
      return;
    }

    hashStore.push({ key, value });
    return;
  }

  isExist(hashMap, key) {
    const index = hashMap.findIndex((item) => item.key === key);
    if (index !== -1) return true;
    return false;
  }
}

console.log(hash('anatngsbrja', 10));
const a = Array.from({ length: 10 }, (v, i) => new Array());
console.log(a);
