let arr = [1, 23, 3, 4, 5];
arr.reverse();
console.log(arr);
function test() {
  test2();
}
const test2 = () => {
  console.log(this);
};
test();
