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

    searchNode(node, key) {
        if (node == null) {
            return false;
        }

        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        }

        return true;
    }

    search(key) {
        return this.searchNode(this.root, key);
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    preOrderTravesseNode(node, callback) {
        if (node != null) {
            callback(node.key);
            this.preOrderTravesseNode(node.left, callback);
            this.preOrderTravesseNode(node.right, callback);
        }
    }

    preOrderTravesse(callback) {
        this.preOrderTravesseNode(this.root, callback)
    }

    postOrderTravesseNode(node, callback) {
        if (node != null) {
            this.postOrderTravesseNode(node.left, callback);
            this.postOrderTravesseNode(node.right, callback);
            callback(node.key);
        }
    }

    postOrderTravesse(callback) {
        this.postOrderTravesseNode(this.root, callback)
    }

    minNode(node) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }

        return current;
    }

    min() {
        return this.minNode(this.root);
    }

    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }

        return current;
    }

    max() {
        return this.maxNode(this.root);
    }

    remove(key) {

    }
}

module.exports = BinarySearchTree;