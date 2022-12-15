const result = [];
// function capitalizeFirst(arr) {
//   // add whatever parameters you deem necessary - good luck!
//   if (arr.length === 1) return [arr[0].toUppercase()];
// }
[].slice;
function capitalizeWords(array) {
  if (array.length === 1) {
    console.log('array[0]'.slice(1));
    return [array[0][0].toUpperCase() + array[0].slice(1)];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(
    array.slice(array.length - 1)[0][0].toUpperCase() +
      array[array.length - 1].slice(1)
  );
  return res;
}
console.log(capitalizeWords(['car', 'taco', 'banana']));

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
