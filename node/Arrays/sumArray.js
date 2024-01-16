// 7.Find the Sum of Array Elements:
// Write a function to calculate and return the sum of all elements in an array.

function sumOfArray(array) {
  let sum = 0
  for (let index = 0; index < array.length; index++) {
    sum = array[index] + sum
  }
  return sum
}

let array = [1, 2, 3, 4, 5]

const result = sumOfArray(array)
console.log('result :', result)
