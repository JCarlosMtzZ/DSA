const BST = require('./10_1_bstImplementation.js');

let myBST = new BST();

myBST.insert(100);
myBST.insert(20);
myBST.insert(200);
myBST.insert(10);
myBST.insert(30);
myBST.insert(150);
myBST.insert(300);

function inorderBST(root) {
    if (root === null)
        return;

    inorderBST(root.left);
    console.log(root.value);
    inorderBST(root.right);   

    return;
};

function preorderBST(root) {
    if (root == null)
        return;

    console.log(root.value);

    preorderBST(root.left);
    preorderBST(root.right);

    return;
};

function postorderBST(root) {
    if (root == null)
        return;

    postorderBST(root.left);
    postorderBST(root.right);
    console.log(root.value);

    return;
};

inorderBST(myBST.root);
console.log('-----');
preorderBST(myBST.root);
console.log('-----');
postorderBST(myBST.root);