class SLLNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }
  addFront(value) {
    let newNode = new SLLNode(value); //we want node to point to head
    newNode.next = this.head; //next is pointing to head
    this.head = newNode; //pointing to our added Node instead of original head to be head
    return this.head;
  }

  removeFront() {
    if (this.head === null) {
      //null does not have 'next' property. If no value for head, return this.head immediately
      return this.head;
    }
    let removedNode = this.head; //holds head
    this.head = removedNode.next; //point head to second node
    removedNode.next = null; //point original head to null which cuts off original head node
    return this.head;
  }

  front() {
    // if (this.head === null) {
    //   return null;
    // } else {
    //   return this.head.value;
    // }
    return this.head ? this.head.value : null;
  }
}

let mySLL = new SLL();
mySLL.addFront(10);
console.log(mySLL);
mySLL.addFront(5);
// console.log(mySLL);
// mySLL.addFront(7);
// console.log(mySLL);
// mySLL.removeFront();
console.log(mySLL);
console.log("this is front", mySLL.front());
