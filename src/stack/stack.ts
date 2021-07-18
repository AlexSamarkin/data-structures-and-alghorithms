export class Stack<T> {
    private items: T[] = [];
    private readonly mins: T[];
    private readonly maxs: T[];
    private _cmpFunction: (a: T, b: T) => boolean;

    public length() {
        return this.items.length;
    }

    constructor() {
        this._cmpFunction = (a: T, b: T) => a > b;
        this.mins = [];
        this.maxs = [];
    }

    public push(item: T): void {
        this.items.push(item);
        const lastMin = this.mins[this.mins.length - 1] ?? null;
        const lastMax = this.maxs[this.maxs.length - 1] ?? null;

        if (!lastMin) {
            this.mins.push(item);
        } else {
            this.mins.push(this._cmpFunction(lastMin, item) ? item : lastMin);
        }

        if (!lastMax) {
            this.maxs.push(item);
        } else {
            this.maxs.push(this._cmpFunction(lastMax, item) ? lastMax : item);
        }
    }

    public pop(): T | null {
        const item = this.items[this.items.length - 1];
        this.items = this.items.slice(0, this.items.length - 1);
        this.mins.pop();
        this.maxs.pop();
        return item ?? null;
    }

    public peek(): T | null {
        return this.items[this.items.length - 1] ?? null;
    }

    public min(): T | null {
        return this.mins[this.mins.length - 1] ?? null;
    }

    public max(): T | null {
        return this.maxs[this.maxs.length - 1] ?? null;
    }

    public toArray(): T[] {
        return this.items;
    }

    set cmpFunction(fn: (a: T, b: T) => boolean) {
        this._cmpFunction = fn;
    }
}