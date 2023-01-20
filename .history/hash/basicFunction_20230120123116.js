function hash(str, len) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
    //sum %= len;
  }
  //return sum;
  return sum % len;
}

console.log(hash('aaa', 10));
