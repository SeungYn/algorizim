let user = {};

Object.defineProperty(user, 'name', {
  value: 'John',
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor);
