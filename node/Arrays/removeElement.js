// 15. Remove Elements by Value:
//     Write a function that removes all occurrences of a specified value from an arra

function removeElement(array, element) {
  let temp = []
  for (let index = 0; index < array.length; index++) {
    if (array[index] !== element) {
      temp.push(array[index])
    }
  }

  return temp
}

let array = [1, 1, 2, 3, 3, 4, 4]

let result = removeElement(array, 4)
console.log('result :', result)
