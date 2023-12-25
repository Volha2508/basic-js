const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  i = 0;
  let res = '';
  count = 1;
  if (str != '' ) {
    while( str[i+1] ) {
      if ( str[i+1] === str[i]) {
        count += 1;
      }
      else {
        (count > 1) ? res += count + str[i] : res += str[i];
         count = 1;
      }
      i += 1;
    }
    (count > 1) ? res += count + str[i] : res += str[i];
  }
  return res;
}

module.exports = {
  encodeLine
};
