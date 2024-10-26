class ListNode {
    constructor(value = 0, prev = null, nxt = null) {
        this.value = value;
        this.prev = prev;
        this.nxt = nxt;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new ListNode(value);
        this.tail = this.head;
        this.length = 1;
        this.mid = 1;
    }

    updateMid() {
        this.mid = Math.ceil((this.length - 1) / 2);
    }

    // O(n)
    printFromLeft() {
        const values = [];
        let current = this.head;

        while (current !== null) {
            values.push(current.value);
            // console.log(current);
            current = current.nxt;
        }

        return values;
    };

    // O(n)
    printFromRight() {
        const values = [];
        let current = this.tail;

        while (current !== null) {
            values.push(current.value);
            // console.log(current);
            current = current.prev;
        }

        return values;
    };

    // O(n)
    traverseToIndexFromLeft(index) {

        let current;
        current = this.head;

        for (let i=0; i<index; i++)
            current = current.nxt;

        return current;
    };

    // O(n)
    traverseToIndexFromRight(index) {

        // 2--><--1--><--10--><--5--><--20
        // 2--><--1--><--9--><--10--><--5--><--20

        let current;
            current = this.tail;

        for (let i=this.length-1; i>index; i--)
            current = current.prev;

        return current;
    };

    // O(1)
    prepend(value) {
        const newHead = new ListNode(value, null, this.head);

        this.head.prev = newHead;
        this.head = newHead;

        this.length++;
        this.updateMid();
    };

    // O(1)
    append(value) {
        const newTail = new ListNode(value, this.tail, null);

        this.tail.nxt = newTail;
        this.tail = newTail;
        
        this.length++;
        this.updateMid();
    };

    // [ 2, 1, 10, 5, 16, 20 ]
    // [ 2, 1, 10, 5, 100, 16, 20 ]

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

        let aux;

        // 2--><--1--><--9--><--10--><--5--><--20
        // 2--><--1--><--9--><--10--><--8--><--5--><--20

        if (index > this.mid) {
            aux = this.traverseToIndexFromRight(index);
            const newNode = new ListNode(value, aux.prev, aux);
            aux.prev.nxt = newNode;
            aux.prev = newNode;
        } else {
            aux = this.traverseToIndexFromLeft(index-1);
            const newNode = new ListNode(value, aux, aux.nxt);
            aux.nxt.prev = newNode;
            aux.nxt = newNode;
        }

        this.length++;
        this.updateMid();
    };


    // O(n)
    remove(index) {
        if (index === 0) {
            this.head = this.head.nxt;
            this.head.prev = null;
            this.length--;
            this.updateMid();
            return;
        }

        if (index >= this.length-1) {
            this.tail = this.tail.prev;
            this.tail.nxt = null;
            this.length--;
            this.updateMid();
            return;
        }

        let aux;

        // 2--><--1--><--9--><--10--><--8--><--5--><--20

        if (index > this.mid) {
            aux = this.traverseToIndexFromRight(index+1);
            aux.prev.prev.nxt = aux;
            aux.prev = aux.prev.prev;
        } else {
            aux = this.traverseToIndexFromRight(index-1);
            aux.nxt.nxt.prev = aux;
            aux.nxt = aux.nxt.nxt;
        }

        this.length--;
        this.updateMid();
    };
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.prepend(1);

// 1--><--10--><--5

myDoublyLinkedList.insert(3, 20);
myDoublyLinkedList.insert(0, 2);
myDoublyLinkedList.insert(2, 9);
myDoublyLinkedList.insert(4, 8);

// 2--><--1--><--9--><--10--><--8--><--5--><--20
//
myDoublyLinkedList.remove(1);
myDoublyLinkedList.remove(4);
myDoublyLinkedList.remove(0);
myDoublyLinkedList.remove(3);
//
// 9--><--10--><--8

console.log(myDoublyLinkedList.printFromLeft());
console.log(myDoublyLinkedList.printFromRight());
console.log(myDoublyLinkedList);