function test() {
  return new Promise((resolve, reject) => {
    console.log(1);
    resolve('aaa');
  });
}

async function test2() {
  return test().then((a) => a);
}

console.log(test2().then((v) => console.log(v)));
