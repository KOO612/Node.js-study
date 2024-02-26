const hob = ['sports', 'cooking'];

// 기존값 편집 x
// 사본에 변경
// 복사해서 편집

const copiedArr = hob.slice();
const copy = [hob];
// const copy = hob;
console.log(copiedArr);
console.log(copy);

copy.push('asd');
console.log(hob);
console.log(copy);
console.log('--------');

// 스프레드 연산자
// 원본을 복사
// 원본 영향x
const copy2 = [...hob];
console.log(copy2);
copy2.push('asd');
console.log(hob);
console.log(copy2);

// 객체, 배열 모두 적용 가능
const person = {
  name: 'max',
  age: 29,
  greet() {
    console.log('hi i am ' + this.name);
  },
};

const copy3 = { ...person };
console.log(copy3);
console.log('-----------');

// rest
const toArr = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};

console.log(toArr(1, 2, 3));

// 매개변수가 3개 이상 일 경우 사용x
// 따라서 rest 사용

const toArr2 = (...args) => {
  return args;
};
console.log(toArr2(1, 2, 3, 4));

// spread 연산자
// 배열이나 객체에서 원소나 속성을 추출하는데 사용

// rest 연산자
// 인수 목록이나 함수에서 여러 인수를 하나의 배열로 묶는데 사용

// 사용하는 위치에 따라 달라짐
