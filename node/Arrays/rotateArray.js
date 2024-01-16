// 4. Question: Rotate elements of an array to the right by a given number of steps.

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
