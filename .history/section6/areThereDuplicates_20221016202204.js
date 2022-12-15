function areThereDuplicates(arr) {
  console.log(1);
  const obj = {};

  for (a of arr) {
    if (a in obj) {
      obj[a] += 1;
      if (obj[a] >= 2) {
        console.log(obj);
        return true;
      }
    } else {
      obj[a] = 1;
    }
  }
  console.log(obj);
  return false;
}

//다중포인터
function areThereDuplicates2(...args) {
  args.sort((a, b) => a > b);
  console.log(args);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

//set O(1)
function areThereDuplicates3() {
  console.log(arguments);
  console.log(new Set(arguments));
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates3(1, 2, 3, 4, 5, 5));
