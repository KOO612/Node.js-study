const express = require('express');
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

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/users', (req, res) => {
  res.json(users);
});
app.get('/users/:userId', (req, res) => {
  const userId = Number(req.params.userId);
  const user = users[userId];
  if (user) {
    res.status(200).json(user);
  } else {
    res.sendStatus(404);
  }
});

app.listen(PORT);
console.log(`시작  ${PORT}`);
