export class LinkedListNode<T> {
    constructor(
        private _value: T,
        private _next: LinkedListNode<T> | null = null
    ) {}

    get value(): T {
        return this._value;
    }

    get next(): LinkedListNode<T> | null {
        return this._next ?? null;
    }

    set next(node: LinkedListNode<T> | null) {
        this._next = node;
    }

    set value(value: T) {
        this._value = value;
    }
}

export default LinkedListNode;