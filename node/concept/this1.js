// In Node.js, as in JavaScript in general, the this keyword is used to refer to the current execution context. However, 
// its behavior can vary depending on where it is used. 
// Let's explore the common use cases for the this operator in Node.js:

// 1. Global Context:

// 2. Function Context:

// 3. Object Methods:



// Example in the global context

// In Node.js, the global object is 'global'
console.log(this === global); // true

// Adding a variable to the global context
this.myGlobalVar = 'I am a global variable';

// Accessing the global variable
console.log(global.myGlobalVar); // I am a global variable

// Creating a function in the global context
function globalFunction() {
  console.log(this === global); // true
  console.log(this.myGlobalVar); // I am a global variable
}

// Calling the global function
globalFunction();


