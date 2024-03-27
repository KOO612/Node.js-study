var x = 10;

// 개발자의 의도
// 명시적 타입 변환
// 숫자 -> 문자열 타입 캐스팅
var str = x.toString();
console.log(typeof str, str);

// 원본은 변경 x
console.log(typeof x, x);
