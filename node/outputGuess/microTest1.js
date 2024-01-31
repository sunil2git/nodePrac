console.log('Start');

setTimeout(() => {
  console.log('Macrotask 1');
}, 0);

setImmediate(() => {
  console.log('Macrotask 2');
});

Promise.resolve().then(() => {
  console.log('Microtask 3');
});

process.nextTick(() => {
  console.log('Microtask 4');
});

console.log('End');

//start
//end
//2
//4
//3
//1
