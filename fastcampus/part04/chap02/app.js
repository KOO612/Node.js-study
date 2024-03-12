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
app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const endTime = Date.now() - start;
  console.log(`${req.method} ${req.url} ${endTime}`);
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  console.log('req.body.name ' + req.body.name);
  const newUser = {
    name: req.body.name,
    id: users.length,
  };
  users.push(newUser);
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
