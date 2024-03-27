// 0이나 '' 은 객체로 평가 될 때 있다
var str = '';
var len = str && str.length;

console.log(len);
console.log(typeof len);
