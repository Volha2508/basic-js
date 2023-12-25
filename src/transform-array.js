const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if( !Array.isArray(arr) ) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  res = [];
  let lastcommand = 0;
  let lastDiscard;
  for(let i = 0; i < arr.length; i++ ) {
    if( arr[i] === '--discard-next' ) {
      lastcommand = 1;
      continue;
    }
    if( arr[i] === '--discard-prev' ) {
      if ( !lastDiscard ) {
        res.pop();
      }
      lastDiscard = true; 
      continue;
    }
    if( arr[i] === '--double-next' ) {
      lastcommand = 2;
      continue;
    }
    if( arr[i] === '--double-prev'  ) {
      if( res.length > 0  && !lastDiscard ) {
        res.push(res.at(-1));
      }
      continue;
    } 
    if( lastcommand === 1 ) {
      lastcommand = 0;
      lastDiscard = true;
    } else {
      res.push(arr[i]);
      lastDiscard = false;
      if( lastcommand === 2) {
        res.push(arr[i]);
        lastcommand = 0;
      }
    }
  }
  return res;
}

module.exports = {
  transform
};
