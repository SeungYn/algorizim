function reverse(args) {
  // add whatever parameters you deem necessary - good luck!
  if (args === '') return;
  else {
    reverse(args.substr(1));
    console.log(args);
  }
}
reverse('awesome');
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
