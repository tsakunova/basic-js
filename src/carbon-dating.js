const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const parse = parseFloat(sampleActivity)
  if(parse>15 || parse<=0 || !sampleActivity || typeof sampleActivity!= 'string'||arguments.length ===0||isNaN(parse)){return false}
  let a = 0.693 /HALF_LIFE_PERIOD
  let age = Math.ceil(Math.log(MODERN_ACTIVITY /parse) / a)
  return age
};
