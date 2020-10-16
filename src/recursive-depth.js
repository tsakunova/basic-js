const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1 // массив
    let localCounter = 0 // массив внутри
    // пробежим по каждому элементу
    arr.forEach(element=>{ 
     // проверим является ли элемент массивом
      if (Array.isArray(element)){
        const depth = this.calculateDepth(element)
        if (localCounter < depth) {
          localCounter = depth
        }
      }
    })
    counter = counter + localCounter
    return counter
  }

};