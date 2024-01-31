// 3.Filter and Sum Odd Numbers:
// Given an array of numbers, use filter to select only the odd numbers,
// then use reduce to find the sum of those odd numbers.

function sumOfOddNum(array) {
  let oddNum = array.filter((num) => num % 2 != 0)
  console.log('oddNum', oddNum)

  let sum = oddNum.reduce((sum, num) => sum + num, 0)
  return sum
}


function  sumofEven(array){
  let evenNum = array.filter((num => num % 2 ==0))


  console.log('evenNum', evenNum)


  let sum = evenNum.reduce((sum,num) => sum +num,0)
  return sum
}



let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = sumOfOddNum(array)

let sumEven = sumofEven(array)


console.log('sum', sum)
console.log('sumEven', sumEven)

