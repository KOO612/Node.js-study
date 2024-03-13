function getUsers(req, res) {
  res.send(Users);
}

function getUser(req, res) {
  const userId = Number(req.params.userId);
  const user = users[userId];
  if (user) {
    res.status(200).json(user);
  } else {
    res.sendStatus(404);
  }
}

function postUser(req, res) {
  console.log('req.body.name ' + req.body.name);
  const newUser = {
    name: req.body.name,
    id: users.length,
  };
  users.push(newUser);
  res.json(users);
}

module.exports = {
  getUser,
  getUsers,
  postUser,
};
