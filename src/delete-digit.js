const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let s = n.toString();
  count = s.length - 1;
  for(let i = 1; i <= count; i++) {
    if( s[i] > s[i-1]) {
      if( i === 1) {
        return parseInt(s.slice(i));
      } else {
        return parseInt(s.slice(0, i-1) + s.slice(i));
      }
    }
    if( s[i] < s[i-1] ) {
      if( i === count) {
        return parseInt(s.slice(0, i));
      } else {
        return parseInt(s.slice(0, i) + s.slice(i+1))
      }
    } 
  }
}

module.exports = {
  deleteDigit
};
