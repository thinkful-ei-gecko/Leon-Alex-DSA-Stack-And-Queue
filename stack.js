class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
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

function peek(stack) {
  return stack.top;
}

function isEmpty(stack) {
  return !!stack.top;
}

function display(stack) {
  let currentNode = stack.top;

  while (currentNode.next !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  console.log(currentNode.value);
}

// let starTrek = new Stack;

// starTrek.push('Kirk');
// starTrek.push('Spock');
// starTrek.push('McCoy');
// starTrek.push('Scotty');

// let store = starTrek.pop();
// starTrek.pop();
// starTrek.push(store.value);

// display(starTrek);

//3. Palindrome

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  let stack1 = new Stack;

  for (let i = 0; i < s.length; i++) {
    stack1.push(s[i]);
  }

  for (let i = 0; i < s.length; i++) {
    let r = stack1.pop().value;
    if (r !== s[i])
      return false;
  }
  return true;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));