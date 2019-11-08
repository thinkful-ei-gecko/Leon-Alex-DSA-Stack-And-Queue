class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(item) {
    let newNode = new _Node(item, null);  
    let oldNode = this.last;

    if (this.first === null) {
      this.first === newNode;
    }

    this.last = newNode;
    oldNode.next = newNode;
  }

  dequeue() {

    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (this.last === null) {
      this.last = null;
    }

    return node.value;
  }
}

