// Function that generates a greeting function based on a salutation
function generateGreetingFunction(salutation) {
  return function (name) {
    console.log(salutation + ', ' + name + '!')
  }
}

// Creating specific greeting functions using generateGreetingFunction
const sayHello = generateGreetingFunction('Hello')
const sayGoodbye = generateGreetingFunction('Goodbye')

// Using the generated greeting functions
sayHello('John') // Outputs: Hello, John!
sayGoodbye('Alice')
