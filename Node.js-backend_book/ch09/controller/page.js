exports.renderProfile = (req, res) => {
  res.render('profile', { title: '내 정보 - nodebird' });
};
exports.renderJoin = (req, res) => {
  res.render('join', { title: '회원 가입 - nodebird' });
};
exports.renderMain = (req, res, next) => {
  const twits = [];
  res.render('main', {
    title: 'nodebird',
    twits,
  });
};
