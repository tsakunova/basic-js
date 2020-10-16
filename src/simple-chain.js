const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.str.length
  },
  addLink(value) {
    this.chain.push('' + value)
    return this;
  },
  removeLink(position) {
    if (position >= 1 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = []
      throw new Error()
    }
    
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finish = '';
    for (let i = 0; i < this.chain.length; i++) {
      if (i === this.chain.length - 1) {
       finish = finish + '( ' + String(this.chain[i]) + ' )'
      } else {
        finish = finish + '( ' + String(this.chain[i]) + ' )~~'
      }
    }
    this.chain = []
    return finish;
  }
};

module.exports = chainMaker;
