// 의존성 비동기 작업 경우 문제 직면
// 콜백 지옥
// 따라서 promise 사용

const fetchData = (callback) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done!');
    }, 1000);
  });
  return promise;
};

// 비동기화 코드
// 아무리 빨라도 즉시 발생 x
setTimeout(() => {
  console.log('timer is done!');
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 1000);

// 딜레이가 존재 x => 동기화 코드
console.log('hello');
console.log('hi');
