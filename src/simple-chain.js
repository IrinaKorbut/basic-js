const CustomError = require("../extensions/custom-error");

let result = [];
const chainMaker = {
  getLength() {
    return result.length();
  },
  addLink(value) {
    if (value == NaN) {
      result.push("(  )");
      return this;
    } else {
      result.push(`( ${value} )`);
      return this;
    }
  },
  removeLink(position) {
    if (!Number.isInteger(position) || parseFloat(position) > result.length) {
      result = [];
      throw new Error("THROWN");
    } else {
      result.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    result.reverse();
    return this;
  },
  finishChain() {
    let str = result.join("~~");
    result = [];

    return str;
  },
};

module.exports = chainMaker;
