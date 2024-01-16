// 6. Write a function that takes a string as input and returns an object containing the count of each vowel (a, e, i, o, u).
// Use the reduce method to count the occurrences of each vowel.

function countVowels(words) {
  let wordList = words
    .split(' ')
    .map((word) => [word.charAt(0).toLowerCase(), word.toLowerCase()])
  console.log(wordList)

  groupedByFirstLetter = wordList.reduce((result, [letter, word]) => {
    result[letter] = result[letter] || []
    let vowelsCondition =
      result[letter] == 'a' ||
      result[letter] == 'e' ||
      result[letter] == 'i' ||
      result[letter] == 'o' ||
      result[letter] == 'u'
    result[letter].push(word)

    return result
  }, {})

  const vowels = 'aeiou'

  const vowelCount = Object.entries(groupedByFirstLetter).reduce(
    (result, [key, value]) => {
      if (vowels.includes(key)) {
        result[key] = value.length
      }
      return result
    },
    {}
  )

  console.log(groupedByFirstLetter)
}

let words =
  'eggs elephant owl apple onnion orange iron indian itally israel usa uae ukraine russia'

console.log(typeof words)

countVowels(words)
