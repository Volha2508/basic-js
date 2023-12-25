const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  if( s1.length < s2.length ) {
    sMin = s1; sMax = s2;
  } else {
    sMin = s2; sMax = s1;
  }
  sRes = '';
  countRes = 0;
  for( let i=0; i < sMin.length; i++) {
    if( sMax.indexOf(sMin[i]) > -1 && sRes.indexOf(sMin[i]) === -1) {
      countRes += Math.min( countItem( sMax, sMin[i] ), countItem( sMin, sMin[i] ) );
      sRes += sMin[i];
    }
  }
  function countItem(str, item) {
    itemCount = 0;
    for(let i = 0; i < str.length; i++) {
      if ( str[i] === item ) {
        itemCount++;
      }
    }
    return itemCount;
  }
  return countRes;
}

module.exports = {
  getCommonCharacterCount
};
