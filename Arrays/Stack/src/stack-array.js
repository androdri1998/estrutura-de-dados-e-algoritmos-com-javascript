class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        const lastPosition = this.items.length - 1;
        const lastItem = this.items[lastPosition];
        return lastItem;
    }

    isEmpty() {
        const stackIsEmpty = this.items.length === 0;
        return stackIsEmpty;
    }

    clear() {
        this.items = [];
    }

    size() {
        const stackSize = this.items.length;
        return stackSize;
    }
}

module.exports = Stack;