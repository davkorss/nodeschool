const askFoo = () => {
  return new Promise((resolve, reject) => {
    resolve('foo')
  })
}

const run = (generator) => {
  const it = generator()
  const go = (result) => {
    if (result.done) {
      return result.value
    }
    result.value
    .then(value => {
      return go(it.next(value))
    })
    .catch(exception => {
      return go(it.throw(exception))
    })
  }
  go(it.next())
}

run(function* () {
  try {
    const foo = yield askFoo()
    console.log(foo)
  } catch (exception) {
    console.log(e)
  }
})
