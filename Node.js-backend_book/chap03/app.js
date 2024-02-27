const express = require('express');
const app = express();
const port = 3000;

let posts = [];

// req.body 사용 시 json 미들웨어 사용
// json 미들웨어 활성화
app.use(express.json());

// post 요청 시 컨텐트 타입이 application 인 경우 파싱
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  // body 데이터를 저장 구조분해
  const { title, name, text } = req.body;

  posts.push({ id: posts.length + 1, title, name, text, createDt: Date() });
  res.json({ title, name, text });
});

app.delete('/posts/:id', (req, res) => {
  // path 정보에서 id 값을 가져옴
  const id = req.params.id;
  // 글 삭제 로직
  const filterdPosts = posts.filter((post) => post.id !== +id);
  // 글 삭제 확인
  const isLengthChanged = posts.length !== filterdPosts.length;
  posts = filterdPosts;

  // 글 개수 변경되었으면 성공
  if (isLengthChanged) {
    res.json('ok');
    return;
  }
  res.json('not changed');
});

app.listen(port, () => {
  console.log(`start server : ${port}`);
});
