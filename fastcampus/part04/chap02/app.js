const express = require('express');
const { getUser, getUsers, postUser } = require('./controllers/users');
const PORT = 4000;

const users = [
  {
    id: 0,
    name: 'jack',
  },
  {
    id: 1,
    name: 'jenny',
  },
  {
    id: 4,
    name: 'kim',
  },
];

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const endTime = Date.now() - start;
  console.log(`${req.method} ${req.url} ${endTime}ms`);
});

app.get('/users', getUser);

app.get('/users/:userId', getUsers);
app.post('/users', postUser);

app.listen(PORT);
console.log(`시작  ${PORT}`);
