const s = new Set();
s.add(false);
s.add(1);
s.add('1');
s.add(1);
s.add(2);
console.log(s.size);
console.log(s.has(1));
console.log(s);
for (const a of s) {
  console.log(typeof a, a);
}

s.forEach((a) => {
  console.log(a);
});
s.delete(2);
s.clear();
console.log('========================');
const arr = [1, 3, 2, 7, 2, 6, 3, 5];
const s1 = new Set(arr);
const result = Array.from(s1);
console.log(result);
for (const s2 of result) {
  console.log(s2);
}
