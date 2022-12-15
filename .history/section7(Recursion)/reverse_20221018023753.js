function reverse(args) {
  // add whatever parameters you deem necessary - good luck!

  if (args === '') return '';
  else {
    return reverse(args.substr(1)) + args[0];
  }
}
console.log(reverse('awesome'));
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
