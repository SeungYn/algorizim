'use strict';
let user = { name: 1 };
//Object.freeze(user);
Object.seal(user);
user.name = 3;
