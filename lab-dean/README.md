##Nd Module##
This contains the functionality to construct a single node object with an input value for the value, and a next value of null initially.
```
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

#SLL Module##
First this contains the functionality to construct a node object, append new objects, prepend objects, remove objects or reverse them.

#Constructor#
Creates a new node object with a length value that will increment or decrement as needed.

```
class SLL {
  constructor() {
    this.head = null;
    this.length = 0;
  }
```

#Insert Head#
This will create a new node object at the head of the list regardless of the amount of existing Nodes in the list, and will increment the length counter when one is created.
```
insertHead(val) {  
    let nd = new Nd(val);

    nd.next = this.head;
    this.head = nd;
    this.length++;
    return this;
  }
```

#Insert End#
This will create a new node object at the end of the list regardless of the amount of existing Nodes in the list, and will increment the length counter when one is created.
```
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
```

#Reverse#
This function will iterate through the list of Nodes changing their next values as needed until the tail and the head of the list are reversed. It will not affect the incrementer.
```
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
```

#Remove#
This function takes an input of the node you want to have to deleted, this will iterate through the list of nodes until it comes across the node to be deleted and remove it, set a new head if the node you've chosen to delete is the head, and decrement the counter when a node is deleted.
```
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
```