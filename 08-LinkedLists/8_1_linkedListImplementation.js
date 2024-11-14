class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new ListNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    // O(n)
    print() {
        const values = [];
        let current = this.head;

        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }

        return values;
    };

    // O(n)
    traverseToIndex(index) {
        let current = this.head;

        for (let i=0; i<index; i++) {
            current = current.next;
        }

        return current;
    }

    // O(n)
    insert(index,  value) {
        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index >= this.length) {
            this.append(value);
            return;
        }

        let previous = this.traverseToIndex(index-1);

        const newNode = new ListNode(value, previous.next);
        previous.next = newNode;
        this.length++;
    };

    // O(n)
    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        let previous = this.traverseToIndex(index-1);

        if (index >= this.length-1) {
            previous.next = null;
            this.tail = previous;
        } else {
            previous.next = previous.next.next;
        }
        this.length--;
    };

    // O(1)
    prepend(value) {
        const newHead = new ListNode(value, this.head);

        this.head = newHead;

        this.length++;
    };

    // O(1)
    append(value) {
        const newTail = new ListNode(value);

        this.tail.next = newTail;
        this.tail = newTail;
        
        this.length++;
    };

    reverse() {

        if (this.length === 1)
            return;

        let aux;
        let previous = null;
        let current = this.head;

        while (current !== null) {
            aux = current.next;
            current.next = previous;
            previous = current;
            current = aux;
        }

        aux = this.head;
        this.head = this.tail;
        this.tail = aux;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

// 1-->10-->5-->16

myLinkedList.insert(4, 20);
myLinkedList.insert(0, 2);
myLinkedList.insert(2, 9);

// 2-->1-->9-->10-->5-->16-->20

myLinkedList.remove(2);
myLinkedList.remove(0);
myLinkedList.remove(4);

// 1-->10-->5-->16

myLinkedList.reverse();

// 16-->5-->10-->1

console.log(myLinkedList.print());
console.log(myLinkedList);