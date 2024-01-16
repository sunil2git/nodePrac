//***11.Move Zeroes to the End:
//Implement a function that moves all zeroes in an array to the end without changing the order of non-zero elements.

function shiftZero(array) {
  let temp = []
  let arrayWithZero = []

  for (let index = 0; index < array.length; index++) {
    if (array[index] !== 0) {
      temp.push(array[index])
    } else {
      arrayWithZero.push(array[index])
    }
  }

  return temp.concat(arrayWithZero)
}

let array = [1, 0, 2, 0, 3, 4]

let result = shiftZero(array)
console.log(result)
