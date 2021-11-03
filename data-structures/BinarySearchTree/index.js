const { compare, defaultCompare, Compare } = require('./util');
const Node = require('./node');

class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.root = null;
    }

    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }

    insert(key) {
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    search(key) {

    }

    inOrderTraverse() {

    }

    preOrderTravesse() {

    }

    postOrderTravesse() {

    }

    min() {

    }

    max() {

    }

    remove(key) {

    }
}

module.exports = BinarySearchTree;