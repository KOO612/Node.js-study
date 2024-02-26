// 비동기화 코드
// 아무리 빨라도 즉시 발생 x
setTimeout(() => {
  console.log('timer is done!');
  fetchData((text) => {
    console.log(text);
  });
}, 1000);

// 딜레이가 존재 x => 동기화 코드
console.log('hello');
console.log('hi');

// 의존성 비동기 작업 경우 문제 직면
// 콜백 지옥
// 따라서 promise 사용

const fetchData = (callback) => {
  setTimeout(() => {
    callback('done!');
  }, 1000);
};
