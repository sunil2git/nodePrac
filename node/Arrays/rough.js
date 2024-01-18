function checMax(array) {
  let max = array[0]

  for (let index = 0; index < array.length; index++) {
    if (array[index] > max) {
      max = array[index]
    }
  }
  return max
}

function moveZero(array) {
  let arrayWithZero = []
  let arrayWitoutZero = []

  for (let index = 0; index < array.length; index++) {
    if (array[index] == 0) {
      arrayWithZero.push(array[index])
    } else {
      arrayWitoutZero.push(array[index])
    }
  }

  let result = arrayWitoutZero.concat(arrayWithZero)
  return result
}

function removeDuplicates(array) {
  let temp = []

  for (let index = 0; index < array.length; index++) {
    if (!temp.includes(array[index])) {
      temp.push(array[index])
    }
  }
  return temp
}

let array = [1, 0, 2, 2, 0, 3, 3, 4, 0, 77]

let max = checMax(array)
let shiftZero = moveZero(array)
let checkDuplicates = removeDuplicates(array)

console.log(max)
console.log(shiftZero)
console.log(checkDuplicates)
