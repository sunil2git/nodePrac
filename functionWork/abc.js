console.log('hello world.');

function greeting(name) {
  // normal function
  console.log(`Hello ${name}, how are you.`);
}

greeting('sunil');

const hi = (name) => {
  console.log(`Hello ${name},are you doing great 👍`);
};

hi('sunil');

//----------------------

const numbers = [1, 2, 3, 4, 5];

// Example 1: Spread operator in function arguments
const sumNumbers = (...nums) => {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
};

const result = sumNumbers(...numbers);
console.log(result);
