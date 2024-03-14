const input = 'aassstuvwwwwx'

// Task i: Count all characters in the input and store the counts in an object
const charCount = {}
for (let char of input) {
  charCount[char] = (charCount[char] || 0) + 1
}
console.log('Task i: Character counts:', charCount)

// Task ii: Count all unique characters in the input
const uniqueChars = new Set(input)
console.log(
  'Task ii: Number of unique characters:',
  Array.from(uniqueChars).length
)

// Task iii: Remove repeated characters
const uniqueInput = Array.from(new Set(input)).join('')
console.log('Task iii: Input with repeated characters removed:', uniqueInput)

let uniqueInput1 = ''

for (let i = 0; i < input.length; i++) {
  // Check if the current character is already in the uniqueInput string
  if (!uniqueInput1.includes(input[i])) {
    // If not, add it to the uniqueInput string
    uniqueInput1 += input[i]
  }
}

console.log('Task iii: Input with repeated characters removed:', uniqueInput1)
