const passport = require('passport');
const local = require('passport-local');
const kakao = require('passport-kakao');
const User = require('../models/user');

module.exports = () => {
  // serializeUser => 로그인시 실행
  // req.session 객체에 어떤 데이터를 저장할지 정하는 메서드
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // 각 요청마다 실행
  // req.session 미들웨어가 이 메소드 호출
  // serializeUser done의 두번째 인수(user.id)가 매개변수
  // 세션에 저장한 아이디를 db에서 조회해 req.user 에 저장
  passport.deserializeUser((id, done) => {
    User.findOne({ where: { id } })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });

  local();
  kakao();
};
