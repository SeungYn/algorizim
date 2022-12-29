'use strict';
let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(JSON.stringify(descriptor, null, 2));
Math.PI = 3;
