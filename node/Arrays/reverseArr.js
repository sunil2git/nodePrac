//  8.Reverse an Array

function rotateArray(array) {
  let temp = []

  console.log('here', array.length)
  for (let index = array.length - 1; index >= 0; index--) {
    temp.push(array[index])
  }

  return temp
}

let array = [1, 2, 3, 4, 5, 6, 7]

let result = rotateArray(array)
console.log(result)

// check slice(start_index, end_index) if not pass parameter thdn it will shallow copy of orignial array
const originalArray = [1, 2, 3, 4, 5]
const reversedArray = originalArray.slice().reverse()

console.log(originalArray) // Output: [1, 2, 3, 4, 5] (unchanged)
console.log(reversedArray) // Output: [5, 4, 3, 2, 1]
