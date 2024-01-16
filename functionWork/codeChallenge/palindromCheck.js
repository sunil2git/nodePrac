const data = 'toot'

let revStr = ''

for (let index = data.length - 1; index >= 0; index--) {
  revStr += data[index]
}

if (data == revStr) {
  console.log(`\n\n palindrom working revStr = ${revStr} and data = ${data}`)
} else {
  console.log(
    `\n\n palindrom not working revStr = ${revStr} and data = ${data}`
  )
}
