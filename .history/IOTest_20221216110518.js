'use strict';
let user = { name: 1 };
//Object.freeze(user);
Object.seal(user);
delete user['name'];
