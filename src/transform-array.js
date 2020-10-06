const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  if (!Array.isArray(arr)) {
    throw Error;
  } else if (arr.length == 0) {
    return newArr;
  } else {
    let i = 0;
    let j = 0;
    while (i < arr.length) {
      if (isNaN(arr[i])) {
        switch (arr[i]) {
          case "--discard-next":
            
            i += 2;
            if (arr[i] == "--double-prev" || arr[i] == "--discard-prev") {
              i+=1
            }
            break;
          case "--discard-prev":
            if (i <= 0) {
              i++;
              break;
            } else {
              j--;
              newArr.splice(j, 1);
              
              i++;
            break;
            }
            
          case "--double-next":
            if (i + 1 < arr.length) {
              newArr[j] = arr[i + 1];
              newArr[j+1] = arr[i + 1];

              i += 2;
              j+=2;
              break;
            }
            i++;
            break;
          case "--double-prev":
            if (arr[i-2] == "--double-next") {
            newArr[j] = arr[i - 1];
            i++;
            j++;
            } else if (i <= 0) {
              i++;
              break;
            }
            else {
              newArr[j] = arr[i - 1];
            i++;
            j++;
            }            
            break;
          default:
            newArr[j] = arr[i];
            i++;
            j++;
            break;
        }
      } else {
        newArr[j] = arr[i];
        i++;
        j++;
      }
    }
    return newArr;
  }
};
