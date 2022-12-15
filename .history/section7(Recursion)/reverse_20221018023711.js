function reverse(args) {
  // add whatever parameters you deem necessary - good luck!

  if (args === '') return;
  else {
    return args[0] + reverse(args.substr(1));
  }
}
reverse('awesome');
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
