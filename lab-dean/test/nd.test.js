'use strict';

const ND = require('../lib/nd.js');
require('jest');

let node1 = new ND(9); 
let node2 = new ND('dog');

describe('Node Constructor', () => {
  describe('#node', () => {
    it('should return an instance of node', () => {
      expect(node1).toBeInstanceOf(ND);
      expect(node1).toBeInstanceOf(ND);
    });
    it('should return a valid Node object', () => {
      expect(node1.value).toEqual(9);
      expect(node2.value).toEqual('dog');
    });
    it('should create a node with a next value of null', () => {
      expect(node1.next).toBeNull();
      expect(node2.next).toBeNull();
    });
  });
});