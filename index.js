exports.moveZeros = arr => {
  try {
    const filtered = arr.filter(el => el !== 0)
    const zeros = arr.filter(el => el === 0)
    return filtered.concat(zeros)
  } catch (error) {
    throw error
  }
}
