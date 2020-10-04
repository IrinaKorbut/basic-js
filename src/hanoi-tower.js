const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let hanoi_tower = {};
  hanoi_tower.turns = Math.pow(2, disksNumber) - 1;
  hanoi_tower.seconds = Math.floor((hanoi_tower.turns / turnsSpeed) * 3600);
  return hanoi_tower;
};
