const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
  console.log('모든 요청');
  next();
});

app.get(
  '/',
  (req, res) => {
    // res.send('hello');
    // res.sendFile(path.join(__dirname, '/index.html'));
    console.log('get / 요청');
    next();
  },
  (req, res) => {
    console.log('에러 발생');
    throw new Error('에러 처리 미들웨어로');
  }
);

app.use((err, req, res, next) => {
  console.log('----------');
  console.error(err);
  console.log('----------');
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});
