const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(names) {
    if (!Array.isArray(names)) {return false}
    return names
    .filter(function(str){
      return typeof str === 'string'
    })
    .map(function(letter){
      return letter.trim().substr(0,1).toUpperCase()
    })
    .sort()
    .join('')
    
};
