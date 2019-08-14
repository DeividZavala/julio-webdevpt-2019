function getSum (arr = []) {
  if (!arr.length) return 0
  if (arr.length === 1) return arr[0]

  return arr.reduce((acc, num) => {
    return (acc += num)
  })
}
