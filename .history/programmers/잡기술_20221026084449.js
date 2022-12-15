'use-strict';
/**
 * a~z알파벳 만들기
 */
//소문자
new Array(26)
  .fill()
  .map((_, i) => String.fromCharCode(i + 97))
  .join('');
//대문자
new Array(26)
  .fill()
  .map((_, i) => String.fromCharCode(i + 97))
  .join('');
console.log(new Array(10).fill('a'));
