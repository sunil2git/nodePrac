// 19. Question:Chunk an Array:
//     Write a function that takes an array and a chunk size as parameters and returns a new array with elements
//      grouped into chunks of the specified size.
//chunkArray([1, 2, 3, 4, 5, 6], 2);
// Output: [[1, 2], [3, 4], [5, 6]]

function chunkArray(array, chunkSize) {
  // Validate chunkSize to ensure it's a positive integer
  if (!Number.isInteger(chunkSize) || chunkSize <= 0) {
    return 'Invalid chunk size'
  }

  // Initialize the result array to store chunks
  const result = []

  // Loop through the input array and create chunks
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize)
    result.push(chunk)
  }

  return result
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5, 6]
const chunkSize = 2
const result = chunkArray(inputArray, chunkSize)
console.log(result)
// Output: [[1, 2], [3, 4], [5, 6]]
