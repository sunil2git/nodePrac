// 17. Find the Common Elements:
//     Write a function to find and return an array containing elements common to two given arrays.

function checkCommentElement(array1, array2) {
  let temp = []

  console.log('array1 :', array1)
  console.log('array2 :', array2)

  for (let index = 0; index < array1.length; index++) {
    if (array2.includes(array1[index])) {
      temp.push(array1[index])
    }
  }
  return temp
}

let array1 = [1, 2, 3, 4]
let array2 = [3, 4, 5, 6]

let result = checkCommentElement(array1, array2)

console.log('result :', result)
