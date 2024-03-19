const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const jwt = require('jsonwebtoken');
const superSecret = 'superSecret';
const refreshSecret = 'refreshSecret';

/* express.json 으로 body로 들어오는것을 분석해서
request body 에서 이 request 객체 안에
body property안에 이 클라이언트에서
보내오는 body를 받아올수있게 합니다.
*/
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => {
  res.send('hi');
});

let refreshTokens = [];

app.post('/login', (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  // payload + secretText
  // sign 메소드로 토큰 생성
  const accessToken = jwt.sign(user, superSecret, { expiresIn: '30s' });

  // refreshToken 생성
  const refreshToken = jwt.sign(user, refreshSecret, { expiresIn: '1d' });

  refreshTokens.push(refreshToken);

  res.cookie('jwt', refreshToken, {
    // httpOnly 옵션을 줘서 js로 탈취하거나 조작 불가능
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.json({ accessToken: accessToken });
});

const posts = [
  { username: 'lee', title: 'post 1' },
  { username: 'kim', title: 'post 2' },
];

app.get('/posts', authMid, (req, res) => {
  // res.json(posts.filter((post) => post.username === req.user.name));
  res.json(posts);
});

function authMid(req, res, next) {
  // header안 authorization에 토큰이 들어있음
  const authHeader = req.headers['authorization'];
  // 토큰 형식 : Bearer asdasdasd.asdf.asdf 방식으로 들어있음
  // 공백 기준으로 그 뒤 토큰큰 부분만
  // authHeader 가 있고 authHeader.split(' ')[1]
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  // 토큰이 있으니 유효한 토큰인지 확인
  // verify 메소드를 이용하면 sign 메소드로 넣어준 user정보 가져옴
  jwt.verify(token, superSecret, (err, user) => {
    console.log(err);
    if (err) return res.status(403);
    // 다른 미들웨어에서 user 사용가능
    req.user = user;
    next();
  });
}

app.get('/refresh', (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);

  const refreshToken = cookies.jwt;
  // refreshToken이 데이터베이스에 있는 토큰인지 확인
  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }

  // 토큰 유효 확인
  jwt.verify(refreshToken, refreshSecret, (err, user) => {
    if (err) return res.sendStatus(403);
    // 유효하면 accessToken 생성
    const accessToken = jwt.sign({ name: user.name }, superSecret, { expiresIn: '30s' });
    res.json({ accessToken });
  });
});

app.listen(3000, () => {
  console.log('서버 3000번 시작');
});
