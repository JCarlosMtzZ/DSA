class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    };
};

class BST {
    constructor() {
        this.root = null;
    };
    insert(value) {
        let newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        //let parent = null;
        //let child = this.root;
        //
        //while (child !== null) {
        //    if (child.value === value)
        //        return;
        //    
        //    parent = child;
        //    
        //    if (parent.value < value)
        //        child = parent.right;
        //    else
        //        child = parent.left;
        //}
        //
        //if (parent.value < value)
        //    parent.right = newNode;
        //else
        //    parent.left = newNode;

        let current = this.root;

        while (true) {
            if (current.value === value)
                return;
            if (current.value < value) {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            } else {
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }
        }
    };
    lookup(value) {
        if (this.root === null)
            return null;

        let current = this.root;

        while (current !== null) {
            if (current.value === value)
                return current;
            if (current.value < value)
                current = current.right;
            else
                current = current.left;
        }
        return null;
    };
    remove(value) {
        if (this.root === null)
            return;

        if (this.root.left === null && this.root.right === null) {
            if (this.root.value === value)
                this.root = null;
            return;
        }

        let fromRight;
        let removeParent = null;
        let removeChild = this.root;

        // Search for the node that will be removed
        // and its parent

        while (removeChild !== null) {
            if (removeChild.value === value)
                break;
        
            removeParent = removeChild;
            
            if (value > removeChild.value) {
                removeChild = removeChild.right;
                fromRight = true;
            } else {
                removeChild = removeChild.left;
                fromRight = false;
            }
        }

        if (removeChild === null)
            return;

        // If the node has only one child,
        //      link its parent to the child from the direction it comes from.
        // If the node has both children,
        //      find the successor (the leftmost node under its right child)
        //      and the parent of the successor.
        //      Then:
        //          Link the node's parent to the seccessor from the direction the node comes from
        //          Link the successor's left child to the node's left child
        //              If the successor's parent is not the node
        //                  Link the successor's parent to the successor's right child from the direction the node comes from
        //                  Link the successor's right child to the node's right child
        //
        //

        if (removeChild.right === null) {
            if (fromRight)
                removeParent.right = removeChild.left;
            else
                removeParent.left = removeChild.left;
        } else {
            let successorParent = removeChild;
            let successor = removeChild.right;

            while (successor.left !== null) {
                successorParent = successor;
                successor = successor.left;
            }

            if (removeParent === null)
                this.root = successor;
            else if (fromRight)
                removeParent.right = successor;
            else
                removeParent.left = successor;

            successor.left = removeChild.left;

            if (successorParent !== removeChild) {
                successorParent.left = successor.right;
                successor.right = removeChild.right;
            }
        }

    };
};

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }

let myBST = new BST();

let nums = [47, 35, 13, 5, 19, 39, 38, 36, 44, 52, 51, 49, 48, 72, 59, 93, 62, 60, 61, 65, 63, 68];

for (let i=0; i<nums.length; i++) {
    myBST.insert(nums[i]);
}

myBST.remove(52);

//console.log(JSON.stringify(traverse(myBST.root)));

//console.log(myBST);
//console.log(myBST.lookup(1));

const fs = require('fs');

result = JSON.stringify(traverse(myBST.root));

fs.appendFileSync('output.txt', result + '\n');