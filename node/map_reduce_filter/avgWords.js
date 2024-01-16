// 2.Calculate Average Word Length:
// Given a sentence, calculate the average length of the words. Use map to get an array of word lengths, reduce to sum them up,
// and then divide by the total number of words.

function wordAvg(line) {
  let wordsCount = line.split(' ').map((word) => word.length)

  console.log('wordsCount', wordsCount.length)

  let totalCharsInWords = wordsCount.reduce((sum, word) => word + sum, 0)
  console.log('totalCharsInWords', totalCharsInWords)

  return totalCharsInWords / wordsCount.length
}

let line = 'I love my country'

let avg = wordAvg(line)
console.log(avg)
