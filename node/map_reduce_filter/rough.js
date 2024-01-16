// check json id column and increment it

function checkMaxId(array) {
  let max = array[0]

  for (let index = 0; index < array.length; index++) {
    console.log(array[0].id)

    if (array[index].id > max[index].id) {
      console.log(typeof array[1].id)

      max = array[index]
    }
  }
  return max
}

const array = [
  {
    id: 1,
    task: 'wash car at evening 5',
  },
  {
    id: 2,
    task: 'buy vegtables at 7 pm',
  },
]

console.log(array[1].id)

let result = checkMaxId(array)
console.log(result)
