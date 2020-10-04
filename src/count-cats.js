const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let countCat = 0;
  let hears = "^^";
  for (let i = 0; i < backyard.length; i++) {
    for (let j = 0; j < backyard[i].length; j++) {
      if (backyard[i][j] == hears) {
        countCat += 1;
      }
    }
  }
  return countCat;
};
