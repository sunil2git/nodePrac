// 1. Question: Find the maximum number in an array.
// 2. Question: Check if an array contains a specific element.
// 3. Question: Remove duplicate elements from an array.
// 4. Question: Rotate elements of an array to the right by a given number of steps.
// 5. Question: Find the intersection of two arrays.

// 6. Write a program or function to count the number of occurrences of a all substring within a given string

function CheckMax(arr) {
  let max = arr[0]
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index]
    }
  }
  return max
}
let arr = [1, 2, 3, 4, 32]
let result = CheckMax(arr)
//console.log('\n\n result', result)

// 2. Question: Check if an array contains a specific element.
function checkElement(arr, element) {
  for (let index = 0; index < arr.length; index++) {
    console.log('\n\n arr[index] :', arr[index])
    if (arr[index] === element) {
      return true
    }
  }
}
let result2 = checkElement(arr, 3)
//console.log('\n\n result2', result2)

//3. Question: Remove duplicate elements from an array.

function removeDuplicates(arr) {
  return [...new Set(arr)]
}

const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5]
console.log(
  'Array without duplicates:',
  removeDuplicates(numbersWithDuplicates)
)
