function *range (from, to) {
  for (let x = from; x <= to; x++) {
    yield x
  }
}

for (let x of range(5, 10)) {
  console.log(x)
}
