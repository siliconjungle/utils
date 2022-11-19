export const deepCopy = data => JSON.parse(JSON.stringify(data))
export const deepCompare = (a, b) => JSON.stringify(a) === JSON.stringify(b)
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max)
export const roundToNearest = (value, nearest) => Math.round(value / nearest) * nearest
export const getMultiple = (value, multiple) => Math.floor(value / multiple)

export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const throttle = (cb, delay = 1000) => {
  let shouldWait = false
  let waitingArgs
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false
    } else {
      cb(...waitingArgs)
      waitingArgs = null
      setTimeout(timeoutFunc, delay)
    }
  }

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args
      return
    }

    cb(...args)
    shouldWait = true
    setTimeout(timeoutFunc, delay)
  }
}
