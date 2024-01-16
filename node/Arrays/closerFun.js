function temp() {
  let num = 0
  num = num + 1
  return num
}
const numData = temp()
console.log(numData)
console.log(numData)

numData()
function createCounter() {
  let count = 0

  // Closure: inner function has access to the outer variable 'count'
  function increment() {
    count++
    console.log(count)
  }

  return increment
}

// Creating two independent counters
const counter1 = createCounter()
const counter2 = createCounter()

counter1() // Outputs: 1
counter1() // Outputs: 2

counter2() // Outputs: 1 (independent of counter1)
