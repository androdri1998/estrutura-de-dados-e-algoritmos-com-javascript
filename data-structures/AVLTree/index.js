const { defaultCompare, Compare } = require('../BinarySearchTree/util');
const Node = require('../BinarySearchTree/node');

class AVLTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }
}

module.exports = AVLTree;