//10.Find the Average of Array Elements:

function avgOfArray(array) {
  let sum = 0

  for (let index = 0; index < array.length; index++) {
    sum += array[index]
  }

  let avg = sum / array.length

  return avg
}

let array = [1, 2, 3, 10]

let result = avgOfArray(array)
console.log(result)
