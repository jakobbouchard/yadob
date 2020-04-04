const getTimestamp = () => {
  const date = new Date()
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  return '[' +
         ((hour < 10) ? '0' + hour: hour) +
         ':' +
         ((minutes < 10) ? '0' + minutes: minutes) +
         ':' +
         ((seconds < 10) ? '0' + seconds: seconds) +
         '.' +
         ('00' + milliseconds).slice(-3) +
         '] ';
}
const colours = {
  reset: "\x1b[0m",
  info: "\x1b[94m",
  success: "\x1b[92m",
  warn: "\x1b[93m",
  error: "\x1b[91m",
}

exports.info = message => {
  console.log(`${getTimestamp()}${colours.info}[LOG]${colours.reset} %s`, message)
}
exports.success = message => {
  console.log(`${getTimestamp()}${colours.success}[OK]${colours.reset} %s`, message)
}
exports.warn = message => {
  console.log(`${getTimestamp()}${colours.warn}[WARN]${colours.reset} %s`, message)
}
exports.error = message => {
  console.log(`${getTimestamp()}${colours.error}[ERROR]${colours.reset} %s`, message)
}