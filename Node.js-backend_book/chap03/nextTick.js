setImmediate(() => {
  console.log('즉시');
});

process.nextTick(() => {
  // setTimeout(() => {
  //   console.log('nextTick');
  // }, 1000);
  console.log('nextTick');
});

setTimeout(() => {
  console.log('timeout');
}, 0);
Promise.resolve().then(() => console.log('promise'));
