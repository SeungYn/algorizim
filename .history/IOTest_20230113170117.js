function askPassword(ok, fail) {
  let password = 'rockstar';
  if (password == 'rockstar') ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    console.log(this.name + (result ? ' 로그인 성공' : ' 로그인 실패'));
  },
};

askPassword(user.login.call(user, true), user.login.call(user, false)); // ?
