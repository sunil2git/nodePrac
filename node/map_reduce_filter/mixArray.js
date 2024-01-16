// 4.Flatten and Filter Arrays:
// Given an array of arrays containing both numbers and strings, use reduce to flatten the arrays into a single array,
// and then use filter to select only the numbers.

function checkMixedArray(array) {
  let numOnly = array.filter((num) => typeof num === 'number')
  let strOnly = array.filter((num) => typeof num === 'string')

  return numOnly
}

let array = [1, 2, 'sunil', 'pune', 3, 4, 'Bokaro', 'tata']

const result = checkMixedArray(array)

console.log(result)
