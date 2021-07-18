export abstract class BinaryHeap {
    protected items: number[] = [];

    public length(): number {
        return this.items.length;
    }

    public toArray(): number[] {
        return this.items;
    }

    public root(): number | null {
        return this.items[0] ?? null;
    }

    protected swap(indexToSwap: number, swappingIndex: number): void {
        if (!this.items[indexToSwap] || !this.items[swappingIndex]) {
            throw new Error('Wrong index provided');
        }

        const cached = this.items[swappingIndex];
        this.items[swappingIndex] = this.items[indexToSwap];
        this.items[indexToSwap] = cached;
    }

    public abstract insert(item: number): void;
    public abstract deleteRoot(): void;
}