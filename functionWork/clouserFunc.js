function outerFunction(x) {
  // This inner function has access to the "x" parameter of outerFunction
  function innerFunctionData(y) {
    return x + y;
  }
  return innerFunctionData; // Return the inner function, creating a closure
}

// Create closure instances
const closure1 = outerFunction(10); // closure1 now "remembers" x as 10
const closure2 = outerFunction(5); // closure2 now "remembers" x as 5

// Use the closure instances to add values to their remembered "x"
console.log(closure1(2)); // Output: 12 (10 + 2)
console.log(closure2(3)); // Output: 8  (5 + 3)
