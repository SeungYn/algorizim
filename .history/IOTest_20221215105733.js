'use strict';
let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
  console.log(i);
}, 100);

function func(a) {}
