const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let max = 1;
    if (!(Array.isArray(arr))) {
      return 0;
    } 
    for (let i = 0; i < arr.length; i++) {    
      let tempDepth = this.calculateDepth(arr[i]) + 1;
      if (tempDepth > max) {
        max = tempDepth;
      }
    }
    return max;
  }
};