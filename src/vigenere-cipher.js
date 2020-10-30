const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
 

  constructor(typeOfMachine) {
    
      this.name = typeOfMachine;

      this.map = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
        k: 10,
        l: 11,
        m: 12,
        n: 13,
        o: 14,
        p: 15,
        q: 16,
        r: 17,
        s: 18,
        t: 19,
        u: 20,
        v: 21,
        w: 22,
        x: 23,
        y: 24,
        z: 25,
      }
      
  }   

  encrypt(message, key) {
    
    if (!(message) || !(key)) {
      throw new Error('THROWN');
    } else {
      let result = ''
      let arrResult = []
      this.message = message;
      this.key = key;
      let messageArr = this.message.toLowerCase().split('');
      let keyArr = this.key.toLowerCase().split('');
      for (let i = 0, j = 0; i < messageArr.length; i++) {
        
        if (messageArr[i] == ' ') {
          arrResult.push(' ');
        } else if (!(messageArr[i].charCodeAt() >= 97 && messageArr[i].charCodeAt() <= 122)) {
          arrResult.push(messageArr[i]);

        } else {
        let valueOfChar = (this.map[messageArr[i]] + this.map[keyArr[j % keyArr.length]]) % 26;
        let char = Object.keys(this.map).find( key => this.map[key] == valueOfChar);
        arrResult.push(char);
        j++;
        }
      }
      result = arrResult.join('');
      return result.toUpperCase();
    }
    
    
  }    

  decrypt(message, key) {
    if (!(message) || !(key)) {
      throw new Error('THROWN');
    } else {
      let result = ''
      let arrResult = []
      this.message = message;
      this.key = key;
      let messageArr = this.message.toLowerCase().split('');
      let keyArr = this.key.toLowerCase().split('');
      for (let i = 0, j = 0; i < messageArr.length; i++) {
        
        if (messageArr[i] == ' ') {
          arrResult.push(' ');
        } else if (!(messageArr[i].charCodeAt() >= 97 && messageArr[i].charCodeAt() <= 122)) {
          arrResult.push(messageArr[i]);

        } else {
        let valueOfChar = ((this.map[messageArr[i]] - this.map[keyArr[j % keyArr.length]]) +26 ) % 26;
        let char = Object.keys(this.map).find( key => this.map[key] == valueOfChar);
        arrResult.push(char);
        j++;
        }
      }
      result = arrResult.join('');
      return result.toUpperCase();
    }
  }
}

module.exports = VigenereCipheringMachine;
