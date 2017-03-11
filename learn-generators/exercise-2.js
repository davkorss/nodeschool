function *factorial (n) {
  let factorial = 1
  for (let x = 1; x <= n; x++) {
    factorial *= x
    yield factorial
  }
}

for (let x of factorial(5)) {
  console.log(x)
}
