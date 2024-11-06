const BST = require('./10_1_bstImplementation.js');

class BSTTraversal extends BST {
    constructor() {
        super();
    };
    inorder(root, values) {
        if (root === null)
            return;

        this.inorder(root.left, values);
        values.push(root.value);
        this.inorder(root.right, values);

        return values;
    };
    DFSInorder() {
        return this.inorder(this.root, []);
    };
    preorder(root, values) {
        if (root === null)
            return;

        values.push(root.value);
        this.preorder(root.left, values);
        this.preorder(root.right, values);

        return values;
    };
    DFSPreorder() {
        return this.preorder(this.root, []);
    };
    postorder(root, values) {
        if (root === null)
            return;

        this.postorder(root.left, values);
        this.postorder(root.right, values);
        values.push(root.value);

        return values;
    };
    DFSPostorder() {
        return this.postorder(this.root, []);
    };
}

const myBST = new BSTTraversal();

myBST.insert(9);
myBST.insert(4);
myBST.insert(20);
myBST.insert(1);
myBST.insert(6);
myBST.insert(15);
myBST.insert(170);

//            9
//      4            20
//  1       6   15      170

console.log(myBST.DFSInorder());
console.log(myBST.DFSPreorder());
console.log(myBST.DFSPostorder());