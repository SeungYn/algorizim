async function* fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;

  while (url) {
    const response = await fetch(url, {
      // (1)
      headers: { 'User-Agent': 'Our script' }, // GitHub는 모든 요청에 user-agent헤더를 강제 합니다.
    });

    const body = await response.json(); // (2) 응답은 JSON 형태로 옵니다(커밋이 담긴 배열).

    // (3) 헤더에 담긴 다음 페이지를 나타내는 URL을 추출합니다.
    let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
    nextPage = nextPage?.[1];

    url = nextPage;

    for (let commit of body) {
      // (4) 페이지가 끝날 때까지 커밋을 하나씩 반환(yield)합니다.
      yield commit;
    }
  }
}

(async () => {
  let count = 0;

  for await (const commit of fetchCommits(
    'javascript-tutorial/en.javascript.info'
  )) {
    console.log(commit.author.login);

    if (++count == 100) {
      // 100번째 커밋에서 멈춥니다.
      break;
    }
  }
})();
