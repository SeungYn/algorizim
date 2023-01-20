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
    const hashValue = this.hash(key);

    const hashStore = this.keyMap[hashValue];

    let index = this.isExist(hashStore, key);
    console.log(index);
    if (index >= 0) {
      hashStore[index][key] = value;
      return;
    }
    hashStore.push({ [key]: value });
    return;
  }

  get(key) {
    const hashValue = this.hash(key);

    const hashStore = this.keyMap[hashValue];
    let index = this.isExist(hashStore, key);
    console.log(hashStore);
    if (++index) {
      return hashStore[index];
    }
    return undefined;
  }

  isExist(hashMap, key) {
    return hashMap.findIndex((item) => item.key === key);
  }
}

const hashTable = new HashTable(50);
hashTable.set('asd', '123');
hashTable.set('asd', '124');
hashTable.set('asdr', '123');

console.log(hashTable.get('asd'));
const test = { a: 1 };
console.log(test);
