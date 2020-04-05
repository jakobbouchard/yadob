const getTimestamp = () => {
  const date = new Date();
  const hours = (`0` + date.getHours()).slice(-2);
  const minutes = (`0` + date.getMinutes()).slice(-2);
  const seconds = (`0` + date.getSeconds()).slice(-2);
  const milliseconds = (`00` + date.getMilliseconds()).slice(-3);
  return `[${hours}:${minutes}:${seconds}.${milliseconds}] `;
}
const colours = {
  reset: "\x1b[0m",
  info: "\x1b[94m",
  success: "\x1b[92m",
  warn: "\x1b[93m",
  error: "\x1b[91m",
}

exports.info = message => {
  console.log(`${getTimestamp()}${colours.info}[LOG]${colours.reset} ${message}`);
}
exports.success = message => {
  console.log(`${getTimestamp()}${colours.success}[OK]${colours.reset} ${message}`);
}
exports.warn = message => {
  console.log(`${getTimestamp()}${colours.warn}[WARN]${colours.reset} ${message}`);
}
exports.error = message => {
  console.log(`${getTimestamp()}${colours.error}[ERROR]${colours.reset} ${message}`);
}