function *flat (arr) {
  if (Array.isArray(arr)) {
    for (let x = 0; x < arr.length; x++) {
      yield* flat(arr[x])
    }
  } else {
    yield arr
  }
}

const arr = [1, [2, [3, 4], 5], 6]
for (let x of flat(arr)) {
  console.log(x)
}
