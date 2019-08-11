describe('Testing getSum function', () => {
  it('should return 0 if the array is empty', () => {
    expect(getSum()).toBe(0)
  })

  it('should return the value if the array only contains one number', () => {
    expect(getSum([4])).toBe(4)
  })

  it('should return the sum of all values in the array', () => {
    expect(getSum([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(45)
  })
})
