exports.moveZeros = arr => {
  try {
    const filterArr = arr.filter(el => el !== 0)
    const zeroArr = arr.filter(el => el === 0)
    return [...filterArr, ...zeroArr]
  } catch (error) {
    throw error
  }
}
