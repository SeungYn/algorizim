// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, cb) {
  // add whatever parameters you deem necessary - good luck!
  if (!arr) return false;
  if (!cb(arr[0])) someRecursive(arr.splice(0, 1), cb);
  else return true;
}

console.log(someRecursive([1, 2, 3, 4], isOdd);
)