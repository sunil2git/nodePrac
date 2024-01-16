// 16. Transpose a Matrix:
// Given a matrix represented by a 2D array, write a function to transpose the matrix (swap rows with columns).
function transposeMatrix(matrix) {
  const rows = matrix.length
  const columns = matrix[0].length

  // Create an empty matrix to store the transposed values
  ///const transposedMatrix = Array.from({ length: columns }, () => [])

  const transposedMatrix = []

  // Initialize the transposed matrix with empty arrays
  for (let i = 0; i < columns; i++) {
    transposedMatrix.push([])
  }

  // Iterate through the original matrix and fill in the transposed values
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      transposedMatrix[j][i] = matrix[i][j]
    }
  }

  return transposedMatrix
}

// Example usage
const originalMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const transposedResult = transposeMatrix(originalMatrix)

console.log('Original Matrix:')
console.log(originalMatrix)

console.log('\nTransposed Matrix:')
console.log(transposedResult)
