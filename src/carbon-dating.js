const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity == "string" && /^[\d.]+$/g.test(sampleActivity)) {
    sampleActivity = parseFloat(sampleActivity);
    if (sampleActivity > 0 && sampleActivity <= 15) {
      let k = 0.693 / 5730;
      let sampleAge = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
      return Math.ceil(sampleAge);
    }
  }
  return false;
};
