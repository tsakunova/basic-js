const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes,
  separator = '+',
  addition = '',
  additionRepeatTimes,
  additionSeparator = '|'}) {

let newStr = ''
let add = String(addition)

  let addStr = (add+additionSeparator).repeat(additionRepeatTimes-1)+add;
newStr = str+addStr+separator;
return newStr.repeat(repeatTimes-1)+str+addStr;

};