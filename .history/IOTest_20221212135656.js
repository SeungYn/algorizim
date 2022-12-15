function* gen() {
  try {
    let result = yield '2 + 2 = ?'; // (1)

    console.log(
      '위에서 에러가 던져졌기 때문에 실행 흐름은 여기까지 다다르지 못합니다.'
    );
  } catch (e) {
    console.log(e); // 에러 출력
  }
}

let generator = gen();

let question = generator.next().value;
console.log(question);

generator.throw(new Error('데이터베이스에서 답을 찾지 못했습니다.')); //
