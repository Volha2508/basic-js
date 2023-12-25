const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(flag) {
    this.direct = flag === undefined ? true : flag;
  }
  
  encrypt(message, key) { 
    if( message === undefined || key === undefined ) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numAlph = {};
    for( i = 0; i < alphabet.length; i++) {
      numAlph[alphabet[i]] = i;
    }

    let code = '';
    let j = 0;
    for(let i = 0; i < message.length; i++){
      if ( numAlph[message[i]] === undefined ) {
        code += message[i];
      } else {
          code += alphabet[(numAlph[message[i]] + numAlph[key[j++ % key.length]]) % alphabet.length];
      }
    }
    return this.direct ? code : code.split('').reverse().join('');
  }

  decrypt(message, key) {
    if( message === undefined || key === undefined ) {
      throw  new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numAlph = {};
    for( i = 0; i < alphabet.length; i++) {
      numAlph[alphabet[i]] = i;
    }

    let code = ''
    let j = 0;
    for(let i = 0; i < message.length; i++){
      if( numAlph[message[i]] === undefined ) {
        code += message[i];
      } else {
          code += alphabet[(numAlph[message[i]] - numAlph[key[j++ % key.length]] + alphabet.length) % alphabet.length];
      }
    }
    return this.direct ? code : code.split('').reverse().join('');
  } 
}

module.exports = {
  VigenereCipheringMachine
};
