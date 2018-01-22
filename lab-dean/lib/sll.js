'use strict';

const Nd = require('./nd');

class SLL {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertHead(val) {
    let nd = new Nd(val);

    nd.next = this.head;
    this.head = nd;
    this.length++;
    return this;
  }

  insertEnd(val) {
    let nd = new Nd(val);

    if(!this.head) {
      this.head = nd;
      this.length++;
      return this;
    }

    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    this.length++;
    return this;
  }

  reverse() {
    let node = this.head;
    let previous = null;

    while(node) {
      let save = node.next;
      node.next = previous;
      previous = node;
      node = save;
    }
    return previous;
  }

  remove(offset) {
    if (!offset) return null;
    if (offset === 1) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    let currentNode = this.head;
    let lastNode = null;
    for (var location = 1; location <= offset; location ++) {
      if(location === offset) {
        lastNode.next = currentNode.next;
        this.length -- ;
        return this;
      }
      lastNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  
}

module.exports = SLL;