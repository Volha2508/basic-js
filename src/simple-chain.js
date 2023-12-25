const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  addLink(value) {
    return new ChainMaker().addLink(value);
  },
  reverseChain() {
    return new ChainMaker();
  }
}
class ChainMaker {
  constructor() {
    this.chain = [];
  }
  getLength() {
    return this.chain.length;
  }
  addLink(value) {
    if ( arguments.length === 0 ) {
      this.chain.push(' ');
    }  else if (value === null) {
        this.chain.push('null');
      } 
      else {
        this.chain.push(value);
      }
      return this;
    }
  removeLink(position) {
    if( position <= 0  || position > this.getLength() || (typeof position !== 'number') || !Number.isInteger(position) ) {
      throw new Error ("You can't remove incorrect link!");
    } else {
        this.chain.splice( position-1, 1 );
      }
    return this;
    }
  reverseChain() {
      this.chain.reverse();
      return this;
    }
  finishChain() {
      return '( ' + this.chain.join(' )~~( ') + ' )';
    }
  
}

module.exports = {
  chainMaker
};
