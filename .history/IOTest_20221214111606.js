function test() {
  let a = 1;
  function display() {
    console.log(a);
  }
  function count() {
    a++;
  }
}

test().count();
