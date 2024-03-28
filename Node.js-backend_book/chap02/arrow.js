var rel1 = {
  name: 'hi',
  friends: ['nero', 'hero', 'xero'],
  logf: function () {
    var that = this;
    this.friends.forEach(function (friend) {
      console.log(that.name, friend);
    });
  },
};
rel1.logf();

console.log('-------------');

const rel2 = {
  name: 'hi',
  friends: ['nero', 'hero', 'xero'],
  logF() {
    this.friends.forEach((friend) => {
      console.log(this.name, friend);
    });
  },
};

rel2.logF();
