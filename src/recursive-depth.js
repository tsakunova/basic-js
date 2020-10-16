const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1
    let localCounter = 0
    arr.forEach(element=>{
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
  /* constructor() {
    this.counter = 1;
    this.localCounter = 0;
  }
  calculateDepth(arr) {

   for(let i = 0; i < arr.length; i ++) {
      if (Array.isArray(arr[i])) {
        this.localCounter++;
        this.calculateDepth(arr[i])
        if (this.localCounter > this.counter) {
          this.counter = this.localCounter
        }
      }
    }
    return this.counter;
  }
  */
};