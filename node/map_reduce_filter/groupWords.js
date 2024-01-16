// 5.Group Words by Length:
// Given an array of words, group them by their length. The result should be an object where keys are word lengths,
// and values are arrays of words of that length. Use reduce to build the object and map to iterate through the words.
const words = ['cat', 'dog', 'apple', 'orange', 'banana', 'elephant']

const groupedWords = words.reduce((result, word) => {
  const length = word.length
  result[length] = result[length] || []
  result[length].push(word)
  return result
}, {})

console.log(groupedWords) // without using map

const words1 = ['cat', 'dog', 'apple', 'orange', 'banana', 'elephant']

const groupedWords1 = words1.reduce((result, word) => {
  const length = word.length
  result[length] = (result[length] || []).concat(word)
  return result
}, {})

// Using map to iterate through the words
Object.keys(groupedWords1).map((length) => {
  console.log(`Words with length ${length}:`, groupedWords1[length])
})

// Alternatively, you can also use Object.entries for a more concise approach
// Object.entries(groupedWords).map(([length, words]) => {
//   console.log(`Words with length ${length}:`, words);
// });
