let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(arr) {
  const map = new Map();
  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }

  console.log(map.keys());
  const keys = Array.from(map.keys());
  console.log(keys);
  return Array.from(map.values());
}
console.log(aclean(arr));
