export class Queue<T> {
    private items: T[] = [];

    public length(): number {
        return this.items.length;
    }

    public enqueue(item: T): void {
        this.items.push(item);
    }

    public dequeue(): T | null {
        if (!this.items.length) {
            return null;
        }

        const [first, ...rest] = this.items;
        this.items = rest;

        return first;
    }

    public first(): T | null {
        if (!this.items.length) {
            return null;
        }

        return this.items[0];
    }

    public last(): T | null {
        if (!this.items.length) {
            return null;
        }

        return this.items[this.items.length - 1];
    }
}