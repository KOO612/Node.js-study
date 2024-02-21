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
