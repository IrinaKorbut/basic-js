const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';
  let separator = '+';
  let additionSeparator = '|';
  let tempArr = [];

  if ('separator' in options) {
    separator = options['separator'];
  }

  if ('addition' in options) {
    let additionStr = '';
    let tempArrAdd = [];
    
    if ('additionSeparator' in options) {
      additionSeparator = options['additionSeparator'];
    }

    if ('additionRepeatTimes' in options) {
      for (let j = 1; j <= options['additionRepeatTimes']; j++) {
        if ( options['addition'] == null ) {
          options['addition'] = 'null';
        tempArrAdd.push(options['addition']);
      }
    }

    additionStr = tempArrAdd.join(additionSeparator);
    str += additionStr;
  }

  if ('repeatTimes' in options) {
    for (let i = 1; i <= options['repeatTimes']; i++) {

      if (str == null) {
        str = 'null'        
      }

      tempArr.push(str)
    }
  }

  if (!(options['repeatTimes'])) {     
    return str;
  }

  result = tempArr.join(separator);
  return result;
}};
  