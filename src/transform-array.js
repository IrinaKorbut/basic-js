const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) { 
  let newArr = [];
  if (!(Array.isArray(arr))) {
    throw Error;
  } else if (arr.length == 0) {
    return newArr;
  }  
};
