// 18. Question: Find the Union of Two Arrays:
//Write a function that takes two arrays as parameters and returns a new array containing unique elements from both arrays (the union).

function unionArray(array1, array2) {
  let temp = []
  for (let index = 0; index < array1.length; index++) {
    if (!temp.includes(array1[index])) {
      temp.push(array1[index])
    }

    for (let index = 0; index < array2.length; index++) {
      if (!temp.includes(array2[index])) {
        temp.push(array2[index])
      }
    }
  }
  return temp
}

let array1 = [1, 2, 3]
let array2 = [2, 3, 4, 5]

let result = unionArray(array1, array2)

console.log('result: ', result)
