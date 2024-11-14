class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    };

    // O(n)
    printData() {
        let dataString = '[';
        for (let i=0; i<this.length-1; i++) {
            dataString += String(this.data[i]) + ', ';
        }
        dataString += String(this.data[this.length-1]) + ']';

        console.log(dataString);
    }

    // O(1)
    get(index) {
        return this.data[index];
    };

    // O(1)
    push(item) {
        this.data[this.length] = item;
        this.length++;

        return this.length;
    };

    // O(1)
    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;

        return lastItem;
    };

    // O(n)
    insert(index, value) {
        this.data[this.length] = null;


        this.reverseShiftItems(this.length, index);
        this.data[index] = value;

        this.length++;
    }

    // O(n)
    delete(index) {
        const item = this.data[index];

        this.shiftItems(index, this.length-1);
        delete this.data[this.length-1];
        this.length--;

        return item;
    };

    // O(n)
    reverseShiftItems(startIndex, endIndex) {
        for (let i=startIndex; i>endIndex; i--) {
            this.data[i] = this.data[i-1];
        }
    };

    // O(n)
    shiftItems(startIndex, endIndex) {
        for (let i=startIndex; i<endIndex; i++) {
            this.data[i] = this.data[i+1];
        }
    };
};

const newArray = new MyArray();

newArray.push("Hello");
newArray.push("how");
newArray.push("you");
newArray.push("?");
newArray.push("?");

console.log(newArray);

newArray.pop();
newArray.delete(0);

newArray.insert(1, "are");
newArray.insert(3, "today");

newArray.printData();

