// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(args) {
  // add whatever parameters you deem necessary - good luck!
  let result = '';

  function helper(args) {
    console.log(args);
    if (args === '') return '';
    else {
      result += helper(args.substr(1)) + args[0];
    }
  }
  helper(args);
  console.log(result);
}

isPalindrome('amanaplanacanalpanama');
