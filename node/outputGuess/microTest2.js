console.log('Start');

setImmediate(() => {
  console.log('Macrotask 1');
});

setTimeout(() => {
  console.log('Macrotask 2');
}, 0);

process.nextTick(() => {
  console.log('Microtask 3');
});

Promise.resolve().then(() => {
  console.log('Microtask 4');
});

console.log('End');
