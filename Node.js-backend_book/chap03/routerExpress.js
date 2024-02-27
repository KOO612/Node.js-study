const app = require('express')();
const url = require('url');
const port = 3000;

app.listen(port, () => {
  console.log('익스프레스 라우터');
});

app.get('/', (_, res) => res.end('HOME'));
// 사용하지 않는 변수는 빼는것이 원칙
// 구조상 뺄수 없기에 _ 사용

app.get('/user', user);
app.get('/feed', feed);

function user(req, res) {
  const user = url.parse(req.url, true).query;
  res.json(`[user] name : ${user.name}, age: ${user.age}`);
}

function feed(_, res) {
  req.json(`<ul>
  <li>pic1</li>
  <li>pic2</li>
  <li>pic3</li>
  </ul>`);
}
