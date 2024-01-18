function sortArrayDescending(array) {
  let swapped

  do {
    swapped = false

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) {
        // Swap elements if they are in the wrong order
        let temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)

  return array
}

// Example usage:
const originalArray = [5, 2, 9, 1, 5, 6]
const result = sortArrayDescending(originalArray)
console.log(result) // Output: [9, 6, 5, 5, 2, 1]
