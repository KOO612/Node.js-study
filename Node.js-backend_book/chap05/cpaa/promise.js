const DB = [];

function saveDB(user) {
  const oldDBSize = DB.length;
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    // callback 대신 promise 객체 반환
    if (DB.length > oldDBSize) {
      resolve(user);
      // 성공 시 유저 정보 반환
    } else {
      reject(new Error('save DB error!'));
      // 실패 시 에러 발생
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
    // 실패 처리 없음
  });
}

function getResult(user) {
  return new Promise((resolve, reject) => {
    resolve(`sucess register ${user.name}`);
  });
}

function registerByPromise(user) {
  // 비동기 호출 순서 지켜서 실행
  const result = saveDB(user).then(sendEmail).then(getResult);
  // 아직 완료 x 지연(pending) 상태
  console.log(result);
  return result;
}

const myUser = { email: 'andy@test.com', password: '1234', name: 'andy' };
const result = registerByPromise(myUser);
// 결과값이 Promise 이므로 then 메서드에 함수를 넣어서 결과값 볼수있음
result.then(console.log);
