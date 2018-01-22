'use strict';

const SLL = require('../lib/sll.js');
const ND = require('../lib/nd.js');
require('jest');

let list1 = new SLL();
let list2 = new SLL();

describe('SLL Constructor', () => {
  describe('#SLL', () => {
    it('should return an instance of a SLL', () => {
      expect(list1).toBeInstanceOf(SLL);
      expect(list1).toBeInstanceOf(SLL);
    });
    it('should return the head as null', () => {
      expect(list1.head).toBeNull;
      expect(list2.head).toBeNull;
    });  
  });
  describe('#insertHead', () => {
    it('should add another Node to the list', () => {
      list1.insertHead('head-list1');
      list2.insertHead('head-list2');
      expect(list1.head).toBeInstanceOf(ND);
      expect(list2.head).toBeInstanceOf(ND);
    });
    it('should add a Node to the front of the list', () => {
      list1.insertHead('newhead-list1');
      list2.insertHead('newhead-list2');
      expect(list1.head.value).toBe('newhead-list1');
      expect(list2.head.value).toBe('newhead-list2');
    });
  });
  describe('#insertEnd', () => {
    it('should add another Node to the list', () => {
      list1.insertEnd('tail-list1');
      list2.insertEnd('tail-list2');
      expect(list1.head).toBeInstanceOf(ND);
      expect(list2.head).toBeInstanceOf(ND);
    });
    it('should increment properly with new Nodes added', () => {
      expect(list1.length).toBe(3);
      expect(list2.length).toBe(3);
    });
  });
  describe('#reverse', () => {
    it('should change the head of the SLL', () => {
      list1.reverse();
      list2.reverse();
      expect(list1.head.value).toBe('newhead-list1');
      expect(list2.head.value).toBe('newhead-list2');
    });
    it('should set the last Nodes next value to null', () => {
      expect(list1.head.next).toBeNull();
      expect(list2.head.next).toBeNull();
      list1.insertEnd('end-list1');
      list2.insertEnd('end-list2');
    });
  });
  describe('#remove', () => {
    it('should only take numbers as arguments', () => {
      expect(list1.remove()).toBeNull;
      expect(list2.remove('dog')).toBeNull;
    });
    it('should properly decrement after head is removed', () => {
      list1.remove(1);
      list2.remove(2);
      expect(list1.length).toBe(3);
      expect(list2.length).toBe(3);
    });
  });
});