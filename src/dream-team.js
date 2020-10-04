const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arr = [];
    members.forEach((element) => {
      if (typeof element == "string") {
        if (/^[a-z_\s]+$/i.test(element)) {
          let shiftedArr = element.trim().toUpperCase().split("").shift();
          arr.push(shiftedArr);
        }
      }
    });
    return arr.sort().join("");
  } else {
    return false;
  }
};
