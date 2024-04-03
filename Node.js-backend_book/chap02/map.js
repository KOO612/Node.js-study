const m = new Map();

m.set('a', 'b');
m.set(3, 'c');
const d = {};
m.set(d, 'e');

m.get(d);
console.log(m.get(d));

console.log(m.size);
for (const [k, v] of m) {
  console.log(k, v);
}

console.log('=======');
m.forEach((v, k) => {
  console.log(k, v);
});

console.log('=======');
console.log(m.has(d));
console.log('=======');

m.delete(d);
console.log(m.size);
m.clear();
console.log(m.size);
