let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(arr) {
  const map = new Map();
  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }
  console.log(map.values());
  return Array.from(map.values());
}
console.log(aclean(arr));
