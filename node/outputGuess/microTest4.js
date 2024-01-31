console.log('Start');

setImmediate(() => {
  console.log('Macrotask 1');
});

process.nextTick(() => {
  console.log('Microtask 2');
});

setTimeout(() => {
  console.log('Macrotask 3');
}, 0);

Promise.resolve().then(() => {
  console.log('Microtask 4');
});

console.log('End');

//start
//end
//2
//4
//3
//1
