'use strict';
let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);

function func(a) {}
