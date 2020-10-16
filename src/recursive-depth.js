const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.counter = 1;
    this.localCounter = 1;
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
};