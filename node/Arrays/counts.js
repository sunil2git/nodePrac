let arr = ['a', 'a', 'a', 'b', 'b', 'c', 'c', 'c', 'c']

const counts = {}

arr.forEach((element) => {
  if (counts[element]) {
    counts[element]++
  } else {
    counts[element] = 1
  }
})

console.log(counts)

function wordCount(line, wordToFind) {
  listWords = line.split(' ')
  console.log('listWords ', listWords)

  let count = 0
  let countEachWord = {}

  listWords.forEach((word) => {
    if (countEachWord[word]) {
      countEachWord[word]++
    } else {
      countEachWord[word] = 1
    }
  })

  listWords.forEach((takeOneWord) => {
    if (takeOneWord.toLowerCase() === wordToFind.toLowerCase()) {
      console.log('\n\n wordToFind', wordToFind)
      count++
    }
  })
  return countEachWord
}

const allWord = 'hi hi sunil how are you sunil'
const result = wordCount(allWord, 'sunil')
console.log('result', result)
