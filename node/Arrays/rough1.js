function secondMax(array) {
  let max = array[0]
  let secondMax = array[0]

  for (i = 0; i < array.length; i++) {
    if (array[i] > max) {
      secondMax = max

      max = array[i]
    } else if (array[i] > secondMax && array[i] !== max) {
      secondMax = array[i]
    }
  }

  return max
}

function revers(array) {
  let revers = []
  for (i = array.length - 1; i >= 0; i--) {
    revers.push(array[i])
  }
  return revers
}

let array = [1, 2, 3, 4, 5, 6]

let result1 = secondMax(array)
let result2 = revers(array)

console.log('\n\n secondMax >> ', result1)
console.log('\n\n revers >> ', result2)

function countUniqueChars(str) {
  const uniqueChars = new Set(str)
  return uniqueChars.size
}

// Example usage:
const inputString = 'aasrrttyhjkk'
const uniqueCount = countUniqueChars(inputString)
console.log('Number of unique characters:', uniqueCount)

// ------------------------

function countCharacters(str) {
  const charCounts = {}

  // Iterate through the string and count occurrences of each character
  for (let char of str) {
    charCounts[char] = (charCounts[char] || 0) + 1
  }

  return charCounts
}

// Example usage:
const inputString1 = 'aasrrttyhjkk'
const charCounts = countCharacters(inputString)

// Displaying the character counts object
console.log('Character counts:')
for (let char in charCounts) {
  console.log("'" + char + "': " + charCounts[char])
}
