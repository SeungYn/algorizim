function reverse(args) {
  // add whatever parameters you deem necessary - good luck!
  let str = '';
  if (args === '') return;
  else {
    reverse(args.substr(1));
    return args[0];
  }
}
reverse('awesome');
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
