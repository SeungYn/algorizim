function test() {
  return new Promise((resolve, reject) => {
    console.log(1);
    resolve('aaa');
  });
}

function test2() {
  return test().then((a) => console.log(a));
}
