const date = new Date()
const timestamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`
const colours = {
  reset: "\x1b[0m",
  info: "\x1b[94m",
  success: "\x1b[92m",
  warn: "\x1b[93m",
  error: "\x1b[91m",
}

exports.info = message => {
  console.log(`${timestamp} - ${colours.info}[LOG]${colours.reset} %s`, message)
}
exports.success = message => {
  console.log(`${timestamp} - ${colours.success}[OK]${colours.reset} %s`, message)
}
exports.warn = message => {
  console.log(`${timestamp} - ${colours.warn}[WARN]${colours.reset} %s`, message)
}
exports.error = message => {
  console.log(`${timestamp} - ${colours.error}[ERROR]${colours.reset} %s`, message)
}