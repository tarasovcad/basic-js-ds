const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(value) {
    this.value = value; // value of the node
    this.next = null; // pointer to the next node
  }
}

class Queue {
  constructor() {
    this.head = null; // head
    this.tail = null; // tail
  }

  getUnderlyingList() {
    return this.head;
  }

 
  enqueue(value) {
    const newNode = new ListNode(value); // create a new node with the given value

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode; // If empty, set the head to the new node
    }
  }

  
  dequeue() {
    if (!this.head) {
      return null; // if the empty, return null
    }

    const removedValue = this.head.value; 
    this.head = this.head.next; 
    if (!this.head) {
      this.tail = null; 
    }

    return removedValue; 
  }
}

module.exports = {
  Queue
};
