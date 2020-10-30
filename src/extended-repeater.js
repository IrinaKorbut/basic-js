const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';
  let repeatTimes = options['repeatTimes'] !== undefined ? options['repeatTimes'] : 1;
  let separator = options['separator'] !== undefined ? options['separator'] : "+";
  let addition = options['addition'] !== undefined ? options['addition'] : "";
  let additionSeparator = options['additionSeparator'] !== undefined ? options['additionSeparator'] : "|";
  let additionRepeatTimes = options['additionRepeatTimes'] !== undefined ? options['additionRepeatTimes'] : 1;

  
  addition = addition + additionSeparator;
  addition = addition.repeat(additionRepeatTimes);
  addition = addition.substr(0, addition.length - additionSeparator.length);
  
  result = str + addition + separator;
  result = result.repeat(repeatTimes);
  result = result.substr(0, result.length - separator.length);

  return result;

}
  