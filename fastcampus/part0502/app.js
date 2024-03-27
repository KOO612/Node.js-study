const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(
  session({
    secret: 'secret',
    // 변경 사항이 없어도 세션을 다시 저장할지 여부
    resave: false,
    // 초기화 되지 않은 세션을 저장할지 여부
    saveUninitialized: false,
  })
);

const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

app.use(express.json());
// form 안에 있는 데이터 분석해서 가져오기 위해
app.use(express.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // const
});

app.listen(port, () => {
  console.log(port, ' 시작');
});
