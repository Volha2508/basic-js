const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains) {
  const amountDomains = {};
  for (let i = 0; i < domains.length; i++) {   
    let myItem = domains[i];
    let index = myItem.length;
    let key = '';
    let f = 0;
    let dota = myItem.lastIndexOf('.', index);   
    while( dota != -1 ) {  
      key = key + myItem.slice(dota, index);  
      if( !Object.keys(amountDomains).includes(key) ){
        amountDomains[key] = 1;
      } else {
          f = 1;
      }
      index = dota;
      dota = myItem.lastIndexOf('.', index - 1);
    }
    if ( f === 1) {
      for (let i in amountDomains) { 
        amountDomains[i] += 1;
      }  
      f = 0;
    } 
    key = key + '.' + myItem.slice(0, index); 
    amountDomains[key] = 1;  
  }
  return amountDomains;
}
module.exports = {
  getDNSStats
};
