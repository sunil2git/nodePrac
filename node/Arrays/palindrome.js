//9.Check for Palindrome Array:
//Determine if an array is a palindrome (reads the same backward as forward).

function checkPalndrome(array) {
  let temp = []
  let result

  for (let index = array.length - 1; index >= 0; index--) {
    temp.push(array[index])
  }

  console.log('temp :', temp)
  console.log('array: ', array)

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== temp[i]) {
      return (result = false)
    } else {
      return (result = true)
    }
  }
}
let array = [1, 2, 2, 1]
let result = checkPalndrome(array)

console.log('result :', result)
