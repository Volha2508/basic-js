const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  
  let res1 = ''; 
  if  ( options.addition !== undefined ) {  
    if ( options.additionRepeatTimes !== undefined ) {
      for(let i = 0; i < options.additionRepeatTimes - 1; i++) {
        res1 += options.addition + additionSeparator;
      }
      res1 += options.addition;
    } else {
      res1 = options.addition;
    }
  }
  let res2 = '';
  if ( options.repeatTimes !== undefined ) {
    for(let i = 0; i < options.repeatTimes -1; i++) {
      res2 += str + res1 + separator;
    }
    res2 += str + res1;
  } else {
    res2 += str + res1;
  }
  return res2;
}

module.exports = {
  repeater
};
