const Node = require('../BinarySearchTree/node');
const { Colors } = require('../BinarySearchTree/util');


class RedBlackNode extends Node {
    constructor(key) {
        super(key);
        this.key = key;
        this.color = null;
        this.parent = null;
    }

    isRed() {
        return this.color === Colors.RED;
    }
}

module.exports = RedBlackNode;