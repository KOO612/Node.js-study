var x = 10;

// 개발자 의도 x
// 암묵적 타입 변환 implicit coercion
// 문자열 연결 연산자 -> 문자열로 생성
var str = x + '';
console.log(typeof str, str);

// 원본 변경 x
console.log(typeof x, x);
