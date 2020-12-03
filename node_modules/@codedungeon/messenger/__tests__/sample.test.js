const add = (n1, n2) => {
  return n1 + n2
}

describe('Each', () => {
  test('simple test', () => {
    expect(add(1, 1)).toEqual(2)
  })

  test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])('.add(%p, %p)', (a, b, expected) => {
    expect(add(a, b)).toBe(expected)
  })
})

describe.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])('.add(%p, %p)', (a, b, expected) => {
  test(`returns ${expected}`, () => {
    expect(add(a, b)).toBe(expected)
  })

  test(`returned value not be greater than ${expected}`, () => {
    expect(add(a, b)).not.toBeGreaterThan(expected)
  })

  test(`returned value not be less than ${expected}`, () => {
    expect(add(a, b)).not.toBeLessThan(expected)
  })

  it(`returns ${expected}`, () => {
    expect(add(a, b)).toBe(expected)
  })

  it(`returned value not be greater than ${expected}`, () => {
    expect(add(a, b)).not.toBeGreaterThan(expected)
  })

  it(`returned value not be less than ${expected}`, () => {
    expect(add(a, b)).not.toBeLessThan(expected)
  })
})
