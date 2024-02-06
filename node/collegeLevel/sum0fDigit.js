//with string function
function sumOfDigit(num) {
  let numToStr = Math.abs(num).toString()

  let sum = 0

  for (let index = 0; index < numToStr.length; index++) {
    sum += parseInt(numToStr[index])
  }

  return sum
}

function sumOfDigit1(num) {
  let sum = 0

  while (num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  return sum
}

let num = 111

let result = sumOfDigit1(num)

console.log('result :', result)
