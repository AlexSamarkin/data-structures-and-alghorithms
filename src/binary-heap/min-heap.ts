import {BinaryHeap} from "./binary-heap";

export class BinaryMinHeap extends BinaryHeap {
    public insert(value: number): void {
        this.items.push(value);
        this.siftUp(this.items.length - 1);
    }

    public deleteRoot(): void {
        this.items[0] = this.items[this.items.length - 1];
        this.items = this.items.slice(0, this.items.length - 1);
        this.siftDown(0);
    }

    public min(): number | null {
        return this.items[0] ?? null;
    }

    private siftUp(i: number): void {
        const parentIndex = Math.floor((i - 1) / 2);

        if (parentIndex < 0) {
            return;
        }

        if (this.items[i] < this.items[parentIndex]) {
            this.swap(i, parentIndex);
            this.siftUp(parentIndex);
        }
    }

    private siftDown(index: number): void {
        let smallest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;

        if (left < this.items.length && this.items[left] < this.items[smallest])
            smallest = left;

        if (right < this.items.length && this.items[right] < this.items[smallest])
            smallest = right;

        if (smallest != index)
        {
            this.swap(index, smallest)
            this.siftDown(smallest);
        }
    }
}