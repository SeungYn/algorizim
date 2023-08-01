console.log('start');

setTimeout(() => console.log(123), 0);
Promise.resolve(1).then(() => console.log(1111111));

console.log('end');
