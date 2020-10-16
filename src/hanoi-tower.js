const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let calcHanoi = {}
  calcHanoi.turns = Math.pow(2, disksNumber) - 1;
  calcHanoi.seconds = Math.floor(calcHanoi.turns/(turnsSpeed/3600))
  return calcHanoi
};
