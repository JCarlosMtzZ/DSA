class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    };
};

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    };

    peek() {
        return this.first;
    };

    enqueue(value) {
        let newNode = new Node(value);
        
        if (this.isEmpty())
            this.first = newNode;
        else
            this.last.next = newNode;
    
        this.last = newNode;
        this.length++;
    };

    dequeue() {
        if (this.isEmpty())
            return;

        if (this.length === 1)
            this.last = null;

        this.first = this.first.next;
        this.length--;
    };

    isEmpty() {
        return this.length === 0;
    };

};

let myQueue = new Queue();

myQueue.enqueue('John');
myQueue.enqueue('Sara');
myQueue.dequeue();
myQueue.enqueue('Emile');
myQueue.enqueue('Josh');
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue.peek());
console.log(myQueue);