const BST = require('./10_1_bstImplementation.js');

class BSTTraversal extends BST {
    constructor() {
        super();
    };
    bfsIterative() {
        // Time: O(n)
        // Space: O(n)
        // Declare an array to store the values
        // Decalre a current
        // Decalre a queue
        // Push the root to the queue
        // As long as the queue has items:
        //      Pop the queue to the current
        //      Push the current's value to the array
        //      Push the current's children to the queue
        // Return the array
        
        let values = [];
        let queue = [];
        let current;

        queue.push(this.root);
        while (queue.length > 0) {
            current = queue.shift();
            values.push(current.value)
            
            if (current.left !== null)
                queue.push(current.left);
            if (current.right !== null)
                queue.push(current.right);
        }
        return values;
    };
    bfsRecursive(queue, values) {
        // Time: O(n)
        // Space: O(n)
        //
        // The queue and the values array are parameters
        // Base case:
        //      The queue is empty
        // Recursive case:
        //      Call the function passing the parameters

        if (queue.length === 0)
            return values;

        let current = queue.shift();
        values.push(current.value);

        if (current.left !== null)
            queue.push(current.left);
        if (current.right !== null)
            queue.push(current.right);

        return this.bfsRecursive(queue, values);
    };
};

const myBST = new BSTTraversal();

myBST.insert(9);
myBST.insert(4);
myBST.insert(20);
myBST.insert(1);
myBST.insert(6);
myBST.insert(15);
myBST.insert(170);

console.log(myBST.bfsIterative());
console.log(myBST.bfsRecursive([myBST.root], []));