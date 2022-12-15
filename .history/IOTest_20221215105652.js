'use strict';
let i = 1;
setInterval(function () {
  func(i++);
  console.log(i);
}, 100);

function func(a) {}
