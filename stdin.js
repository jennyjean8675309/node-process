process.stdin.setEncoding('utf8')

process.stdin.on('readable', function() {
  // 'readable' is an event listener that waits for readable code in the stdin stream
  var chunk = process.stdin.read()
  // we save that readable chunk of code in a variable
  if (chunk !== null) {
    // and then print it out (using stdout.write) 
    process.stdout.write(`data: ${chunk}`)
  }
})

process.stdin.on('end', () => {
  process.stdout.write('end')
})
