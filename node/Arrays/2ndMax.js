// 12. the Second Largest Element: \*\*\*
//     Write a function to find and return the second largest element in an array.

function secondMax(array) {
  let max = array[0]
  let secondMax = []

  for (let index = 0; index < array.length; index++) {
    if (array[index] > max) {
      max = array[index]
    }
  }

  for (let index = 0; index < array.length; index++) {
    if (array[index] > secondMax && array[index] !== max) {
      secondMax = array[index]
    }
  }
  return secondMax
}

let array = [1, 2, 3, 4, 32, 8]

let result = secondMax(array)
console.log('\n\n  result', result)
// one line result
console.log('\n\n one line result', array.sort((a, b) => b - a)[1])

// The key idea behind Bubble Sort is that after each pass, the largest unsorted element is moved to its correct position.
// The algorithm has a time complexity of O(n^2), making it inefficient for large datasets. Other sorting algorithms
// like Merge Sort or Quick Sort are more efficient for larger datasets.
function bubbleShort(arrry) {
  const n = array.length

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arrry[j] > arrry[j + 1]) {
        temp = arrry[j]
        arrry[j] = arrry[j + 1]
        arrry[j + 1] = temp
      }
    }
  }
  return array
}

let ans = bubbleShort(array)
console.log('\n\n  bubbleShort:', ans)
