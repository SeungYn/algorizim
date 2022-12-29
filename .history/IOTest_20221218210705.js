function test() {
  return new Promise((resolve, reject) => {
    console.log(1);
    resolve('aaa');
  });
}

test();
