exports.moveZeros = arr => {
  const filterArr = arr.filter(el => el !== 0)
  const zeroArr = arr.filter(el => el === 0)

  return [...filterArr, ...zeroArr]
}
