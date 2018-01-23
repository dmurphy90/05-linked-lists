'use strict';

const Nd = require('./nd');

class SLL {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //Big O is a value of N, it's placed directly in front without iterating
  insertHead(val) {  
    let nd = new Nd(val);

    nd.next = this.head;
    this.head = nd;
    this.length++;
    return this;
  }

  //Big O is either O(1) if the list is only one Node, or O(n) if it has to iterate through the entire list
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

  //Big O is O(n) since it has to iterate through the entire list to reverse it, it will never be O(1) since you can't really reverse a single node.
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

  //Big O is O(n) since it has to iterate through the entire list to find the node to delete.
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