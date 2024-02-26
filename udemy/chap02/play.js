const person = {
  name: 'max',
  age: 29,
  // greet: function () {
  //   console.log('hi i am ' + this.name);
  // },
  greet() {
    console.log('hi i am ' + this.name);
  },
};

// person.greet();

const hobbies = ['sport', 'cookies'];
// for (let a of hobbies) {
//   console.log(a);
// }

console.log(hobbies.map((hobby) => 'Hobby: ' + hobby));
console.log(hobbies);
console.log(hobbies.push('program'));
console.log('=======');
console.log(hobbies);
hobbies.push('program');
console.log(hobbies);
console.log(hobbies.map((hobby) => 'Hobby: ' + hobby));
