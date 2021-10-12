class Stack {
    constructor() {
        this._count = 0;
        this._items = {};
    }

    push(element) {
        this._items[this._count] = element;
        this._count++;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this._count--;
        const lastItem = this._items[this._count];
        delete this._items[this._count];
        return lastItem;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        const lastPosition = this._count - 1;
        const lastItem = this._items[lastPosition];
        return lastItem;
    }

    isEmpty() {
        const stackIsEmpty = this._count === 0;
        return stackIsEmpty;
    }

    clear() {
        this._items = {};
        this._count = 0;
    }

    size() {
        return this._count;
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }

        let objString = `${this._items[0]}`;
        for (let i = 1; i < this._count; i++) {
            objString = `${objString}, ${this._items[i]}`;
        }

        return objString;
    }
}

module.exports = Stack;