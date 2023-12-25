const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  for(let j = 0; j < arr.length; j++) {
    for (let k = j+1; k < arr.length; k++ ) { 
      if ( arr[k] < arr[j] && arr[k] != -1 && arr[j] != -1 ) {
        let tmp = arr[k];
        arr[k] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
