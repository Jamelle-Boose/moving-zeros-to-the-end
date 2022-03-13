const { moveZeros } = require("../index")

describe("App", () => {
  it("moves all zeros to the end", () => {
    const arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"]
    const expected = [false, 1, 1, 2, 1, 3, "a", 0, 0]
    expect(moveZeros(arr)).toEqual(expected)
  })

  it("throws error when not an array", () => {
    expect(() => {
      moveZeros("not an array")
    }).toThrow()
  })
})
