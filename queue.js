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

  enqueue(data) {

    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {

    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

function peek(queue) {
  return queue.first;
}

function isEmpty(queue) {
  return !!queue;
}

function display(queue) {
  let curr = peek(queue);
  while (curr !== null) {
    console.log(curr.value);
    curr = curr.next;
  }
}

const starTrekQ = new Queue;

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Chekov');

display(starTrekQ);