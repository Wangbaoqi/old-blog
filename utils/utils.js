

export const invertObject = (target) => {

  return Object.keys(target).reduce((acc, key) => {
    const val = target[key]
    acc[val] = key;

    return acc
  }, {})

}