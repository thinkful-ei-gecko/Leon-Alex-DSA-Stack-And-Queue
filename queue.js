class _Node {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
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

class DoublyQueue {
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
      node.previous = this.last;
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
    this.first.prev = null;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newTop = new _Node(value, this.top);
    this.top = newTop;
  }

  pop() {
    if (this.top === null) {
      return;
    }

    let oldTop = this.top;
    this.top = this.top.next;
    return oldTop;
  }

}

class QueueFromStacks {
  constructor() {
    this.top = null;
    this.forwardStack = new Stack;
    this.backwardStack = new Stack;
  }

  dequeue() {
    this.forwardStack.pop();
  }

  enqueue(value) {
    if (this.forwardStack.top == null) {
      this.forwardStack.push(value);
      return this.forwardStack;
    }

    while (this.forwardStack.top != null) { 
      this.backwardStack.push(this.forwardStack.pop().value);
    }
    this.backwardStack.push(value);

    while (this.backwardStack.top != null) {
      this.forwardStack.push(this.backwardStack.pop().value);
    }
    return this.backwardStack;
  }
}

function main4() {
  let stackQueue = new QueueFromStacks;
  stackQueue.enqueue('leon');
  stackQueue.enqueue('alex');
  stackQueue.enqueue('tauhida');
  stackQueue.enqueue('qualcomm');
  console.log(stackQueue);
  console.log('---');
  // display(stackQueue);
  console.log(JSON.stringify(stackQueue,null,2));
}
// main4();

function peek(queue) {
  return queue.first;
}

function isEmpty(queue) {
  if (queue.first == null) {
    return true;
  }
  return false;
}

function display(queue) {
  let curr = peek(queue);
  while (curr != null) {
    console.log(curr.value);
    curr = curr.next;
  }
}

function main3() {
  const starTrekQ = new DoublyQueue;

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Chekov');

  display(starTrekQ);
  console.log(starTrekQ);
}
// main3();
let people = ['F Jane', 'M Frank', 'M John', 'M Sherlock', 'F Madonna', 'M David', 'M Christopher', 'F Beyonce'];
function processQueue(people) {
  let spareQueue = new Queue;

  people.forEach(person => {
    if (isEmpty(spareQueue)) {
      spareQueue.enqueue(person);
    }
    else {
      let waiting = spareQueue.first.value;
      if (waiting[0] !== person[0]) {
        let dequeued = spareQueue.dequeue();
        console.log(`${person} matched with ${dequeued}`)
      }
      else {
        spareQueue.enqueue(person);
      }
    }

  });
  if (!isEmpty(spareQueue)) {
    console.log('There are some spares remaining');
    while (!isEmpty(spareQueue)) {
      console.log(spareQueue.dequeue());
    }
  }
}
// processQueue(people);

let initialCustomers = ['Abby', 'Barry', 'Charlie', 'Dana', 'Eliza', 'Frank', 'Gilly'];
let enteringCustomers = ['Hilga', 'Isaac', 'Joshua', 'Karen', 'Lisa', 'Mandy', 'Newman', 'Ophidia'];
function bankTeller(customers) {
  let bankQueue = new Queue;
  customers.forEach(customer => bankQueue.enqueue(customer));
  
  let enteringIndex = 0;
  while (bankQueue.first != null) {
    if (enteringIndex < enteringCustomers.length) {
      let personEntering = enteringCustomers[enteringIndex];
      bankQueue.enqueue(personEntering);
      console.log(`${personEntering} entered the queue for the first time`);
    }
    let randomChance = (Math.floor(4 * Math.random()) + 1) * 25;
    if (randomChance === 25) {
      let needPaperworkPerson = bankQueue.dequeue();
      console.log(`${needPaperworkPerson} needs paperwork and re-enters the queue`);
      bankQueue.enqueue(needPaperworkPerson);
    }
    else {
      let personLeaving = bankQueue.dequeue();
      console.log(`${personLeaving} has been processed and left`);
    }
  enteringIndex++;
  }
  console.log('everyone is taken care of');
  console.log(bankQueue);
}
bankTeller(initialCustomers);