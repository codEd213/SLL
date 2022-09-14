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

  contains(value) {
    let runner = this.head;
    while (runner !== null) {
      return runner.value === value ? true : false;
    }
  }

  length() {
    let runner = this.head;
    console.log("this is runner.value", runner.value);
    let length = 0;
    while (runner !== null) {
      if (runner.value !== null) {
        length++;
        runner = runner.next;
      }
    }
    return length;
  }

  display() {
    let runner = this.head;
    let result = "";
    while (runner !== null) {
      // let string = runner.value.toString();
      // return runner.next === null
      //   ? ((result += string), (runner = runner.next))
      //   : ((result += string + ", "), (runner = runner.next));
      if (runner.next === null) {
        result += runner.value;
        runner = runner.next;
      } else {
        result = result + runner.value + ", ";
        runner = runner.next;
      }
    }
    return result;
  }
}

let mySLL = new SLL();
mySLL.addFront(10);
mySLL.addFront(5);
// console.log(mySLL);
// mySLL.addFront(7);
// console.log(mySLL);
// mySLL.removeFront();
// console.log(mySLL.contains(4));
// console.log(mySLL.length());
mySLL.addFront(11.2);
console.log(mySLL.display());
