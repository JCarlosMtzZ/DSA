class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    };
};

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    };

    peek() {
        return this.length === 0 ? this.top : this.top.value;
    };

    push(value) {
        let newNode = new Node(value, this.top);
        this.top = newNode;
        
        if (this.length === 0)
            this.bottom = newNode;

        this.length++;
    };

    pop() {
        if (this.length === 0)
            return;
        
        if (this.length === 1)
            this.bottom = null;

        this.top = this.top.next;

        this.length--;
    };

    isEmpty() {
        return this.length === 0;
    };
};

class ArrayStack {
    constructor() {
        this.data = [];
    };

    peek() {
        return this.data[this.data.length-1];
    };

    push(value) {
        this.data.push(value);
    };

    pop() {
        this.data.pop();
    };

    isEmpty() {
        return this.data.length === 0;
    };
};

//let myStack = new Stack();
//
//myStack.push('google.com');
//myStack.push('youtube.com');
//myStack.push('udemy.com');
//myStack.pop();
//myStack.pop();

//console.log(myStack.peek());
//console.log(myStack);

let myArrayStack = new ArrayStack();

myArrayStack.push('google.com');
myArrayStack.push('udemy.com');
myArrayStack.pop();
myArrayStack.push('youtube.com');

console.log(myArrayStack.peek())
console.log(myArrayStack)