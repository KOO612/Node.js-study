// 구조분해

const person = {
  name: 'max',
  age: 29,
  greet() {
    console.log('hi i am ' + this.name);
  },
};

// 변수명 혼동을 피하기 위해 personData 이런식으로 사용
const printname = (personData) => {
  console.log(personData.name);
};

printname(person);

// 들어오는 객체의 속성 중 관심 있는 것을 명시 {}
const printname2 = ({ name, age }) => {
  console.log(name, age);
};

printname2(person);
console.log('------------');

const { name, age } = person;
console.log(name, age);

console.log('------------');

// 배열 구조 분해
const hob = ['sports', 'cooking'];

const [h1, h2] = hob;
console.log(h1, h2);
