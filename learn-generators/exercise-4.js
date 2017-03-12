function *upper (items) {
  for (let x = 0; x < items.length; x++) {
    try {
      yield items[x].toUpperCase()
    } catch (exception) {
      yield null
    }
  }
}

const badItems = ['a', 'B', 1, 'c']

for (let x of upper(badItems)) {
  console.log(x)
}
