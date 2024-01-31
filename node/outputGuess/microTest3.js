console.log('Start');

setTimeout(() => {
  console.log('Macrotask 1');
}, 0);

process.nextTick(() => {
  console.log('Microtask 2');
});

Promise.resolve().then(() => {
  console.log('Microtask 3');
});

setImmediate(() => {
  console.log('Macrotask 4');
});

console.log('End');

//start
//end
//2
//3
//1
//4
