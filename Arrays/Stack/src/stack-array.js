class Stack {
    constructor() {
        this._items = [];
    }

    push(element) {
        this._items.push(element);
    }

    pop() {
        return this._items.pop();
    }

    peek() {
        const lastPosition = this._items.length - 1;
        const lastItem = this._items[lastPosition];
        return lastItem;
    }

    isEmpty() {
        const stackIsEmpty = this._items.length === 0;
        return stackIsEmpty;
    }

    clear() {
        this._items = [];
    }

    size() {
        const stackSize = this._items.length;
        return stackSize;
    }
}

module.exports = Stack;