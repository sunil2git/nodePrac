function removeDuplicates(array) {
  let temp = []

  for (let index = 0; index < array.length; index++) {
    if (temp.indexOf(array[index]) === -1) {
      temp.push(array[index])
    }
  }

  return temp
}

function removeDuplicates2(array) {
  let temp = []

  for (let index = 0; index < array.length; index++) {
    if (!temp.includes(array[index])) {
      temp.push(array[index])
    }
  }

  return temp
}

let array = [1, 1, 2, 2, 3]

let result = removeDuplicates(array)

console.log(result)
let result2 = removeDuplicates2(array)

console.log(result2)
