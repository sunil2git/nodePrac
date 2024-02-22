function test() {
  setTimeout(() => {
    console.log('Hello')
  }, 1000)
  setTimeout(() => {
    console.log('World')
  }, 1000) // Same delay as "Hello", but will execute after because it's declared after
}

test()
