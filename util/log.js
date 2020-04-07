const fs = require(`fs`);

function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (`0` + date.getMonth()).slice(-2);
  const day = (`0` + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};
function getTimestamp() {
  const date = new Date();
  const hours = (`0` + date.getHours()).slice(-2);
  const minutes = (`0` + date.getMinutes()).slice(-2);
  const seconds = (`0` + date.getSeconds()).slice(-2);
  const milliseconds = (`00` + date.getMilliseconds()).slice(-3);
  return `[${hours}:${minutes}:${seconds}.${milliseconds}]`;
};
const colours = {
  reset: `\x1b[0m`,
  info: `\x1b[94m`,
  success: `\x1b[92m`,
  warn: `\x1b[93m`,
  error: `\x1b[91m`,
};

exports.info = async message => {
  console.log(`${getTimestamp()} ${colours.info}[INFO]${colours.reset} ${message}`);
  fs.appendFileSync(`./logs/${getDate()}.log`, `${getTimestamp()} [INFO] ${message}\n`);
};
exports.success = async message => {
  console.log(`${getTimestamp()} ${colours.success}[OK]${colours.reset} ${message}`);
  fs.appendFileSync(`./logs/${getDate()}.log`, `${getTimestamp()} [OK] ${message}\n`);
};
exports.warn = async message => {
  console.log(`${getTimestamp()} ${colours.warn}[WARN]${colours.reset} ${message}`);
  fs.appendFileSync(`./logs/${getDate()}.log`, `${getTimestamp()} [WARN] ${message}\n`);
};
exports.error = async message => {
  console.log(`${getTimestamp()} ${colours.error}[ERROR]${colours.reset} ${message}`);
  fs.appendFileSync(`./logs/${getDate()}.log`, `${getTimestamp()} [ERROR] ${message}\n`);
};
