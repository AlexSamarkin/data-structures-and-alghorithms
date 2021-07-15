import LinkedListNode from "./linked-list-node";

export class LinkedList<T> {
    constructor(
        private _head: LinkedListNode<T> | null = null
    ) {}

    get head(): LinkedListNode<T> | null{
        return this._head;
    }

    set head(head: LinkedListNode<T> | null) {
        this._head = head;
    }

    public reverse(): LinkedList<T> {
        let previousNode: LinkedListNode<T> | null = null;
        let currentNode: LinkedListNode<T> | null = this.head;
        while(currentNode) {
            const next: LinkedListNode<T> | null = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = next;
        }

        return new LinkedList<T>(previousNode as unknown as LinkedListNode<T>);
    }

    public add(item: T): void {
        if (!this.head) {
            this.head = new LinkedListNode<T>(item);
            return;
        }

        let current: LinkedListNode<T> | null = this.head;

        while (current?.next) {
            current = current.next;
        }

        current.next = new LinkedListNode<T>(item);
    }

    public find(cb: (node: LinkedListNode<T>, index: number) => boolean): LinkedListNode<T> | undefined {
        let currentIndex = 0;
        let current: LinkedListNode<T> | null = this.head;

        if (!current) {
            return void 0;
        }

        while (current) {
            const isFound = cb.call(this, current, currentIndex);
            if (isFound) {
                return current;
            }

            current = current.next;
            currentIndex++;
        }

        return void 0;
    }

    public delete(index: number): void {
        let currentIndex = 0;
        let current: LinkedListNode<T> | null = this.head;
        let prev: LinkedListNode<T> | null = null;

        if (!this.head) {
            return;
        }

        if (index === 0) {
            const oldHead = this.head;
            this.head = oldHead.next;
            oldHead.next = null;
            return;
        }

        while (current) {
            if (index === currentIndex) {
               const toRemove = current;
               if (prev) {
                   prev.next = toRemove.next;
               }
               toRemove.next = null;
               return;
            }
            prev = current;
            current = current.next;
            currentIndex++;
        }
    }

    public deleteBy(fn: (node: LinkedListNode<T>, index?: number) => boolean): void {
        let currentIndex = 0;
        let current: LinkedListNode<T> | null = this.head;
        let prev: LinkedListNode<T> | null = null;

        if (!this.head) {
            return;
        }

        if (fn(this.head, 0)) {
            const oldHead = this.head;
            this.head = oldHead.next;
            oldHead.next = null;
            return;
        }

        while (current) {
            if (fn(current, currentIndex)) {
                const toRemove = current;
                if (prev) {
                    prev.next = toRemove.next;
                }
                toRemove.next = null;
                return;
            }
            prev = current;
            current = current.next;
            currentIndex++;
        }
    }

    public length() {
        let length = 0;
        let current: LinkedListNode<T> | null = this.head;

        while (current) {
            length++;
            current = current.next;
        }

        return length;
    }

    public forEach(cb: (node: LinkedListNode<T>, index: number) => void): void {
        let currentIndex = 0;
        let current: LinkedListNode<T> | null = this.head;

        while (current) {
            cb.call(this, current, currentIndex);
            current = current.next;
            currentIndex++;
        }
    }

    public get(index: number): LinkedListNode<T> | null {
        let currentIndex = 0;
        let current: LinkedListNode<T> | null = this.head;

        while (current) {
            if (currentIndex === index) {
                return current;
            }

            currentIndex++;
            current = current.next;
        }

        return null;
    }

    public toArray(): T[] {
        let result: T[] = [];
        let current: LinkedListNode<T> | null = this.head;

        while (current) {
            result.push(current.value);
            current = current.next;
        }

        return result;
    }

    public isLooped(): boolean {
        if (!this.head || !this.head.next) {
            return false;
        }

        if (this.head.next === this.head) {
            return true;
        }

        let pointer: LinkedListNode<T> | null = this.head;
        let fastPointer: LinkedListNode<T> | null = this.head;

        let touched = false;

        while (pointer !== null || fastPointer !== null) {
            if (pointer === fastPointer && touched) {
                return true;
            }

            if (!touched)  {
                touched = true;
            }
            pointer = pointer?.next ?? null;
            fastPointer = fastPointer?.next?.next ?? null;
        }

        return false;
    }

    public static fromArray<T>(items: T[]): LinkedList<T> {
        if (!items.length) {
            return new LinkedList<T>();
        }

        let previousNode: LinkedListNode<T> | null = null;
        for (let i = items.length - 1; i >= 0; --i) {
           const node: LinkedListNode<T> = new LinkedListNode<T>(items[i]);
           node.next = previousNode;
           previousNode = node;
        }

        return new LinkedList<T>(previousNode as LinkedListNode<T>);
    }
}