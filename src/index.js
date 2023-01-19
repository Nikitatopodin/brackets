module.exports = function check(str, bracketsConfig) {
  let regexpElements = '';
  if (!isNaN(bracketsConfig[0][0] / 1)) {
    bracketsConfig.forEach((elem) => {
      regexpElements += elem[0]
      regexpElements += elem[1]
      regexpElements += '|';
    })
  } else {
    bracketsConfig.forEach((elem) => {
      if (elem != ',') {
        regexpElements += '\\'
        regexpElements += elem[0]
        regexpElements += '\\'
        regexpElements += elem[1]
        regexpElements += '|';
      }
    })
  }

  let regexp = new RegExp(regexpElements.slice(0, regexpElements.length - 1))
  if (regexp.test(str)) {
    return check(str.replace(regexp, ''), bracketsConfig)
  } else {
    return '' === str
  }
}

