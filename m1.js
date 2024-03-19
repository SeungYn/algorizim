console.log(1);

setTimeout(() => {
  console.log(2);
  //process.nextTick(() => console.log('nextTick'));
}, 10);
setImmediate(() => {
  console.log(10);
  process.nextTick(() => console.log('nextTick'));
});
Promise.resolve().then(() => {
  console.log(3);
});
console.log(4);
