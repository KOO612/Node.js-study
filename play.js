const person = {
  name: 'max',
  age: 29,
  greet: function () {
    console.log('hi i am ' + this.name);
  },
};

person.greet();
