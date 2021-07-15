import {BinaryHeap} from "./binary-heap";

export class BinaryMaxHeap extends BinaryHeap {

    public insert(value: number): void {
        this.items.push(value);
        this.siftUp(this.items.length, this.items.length - 1);
    }

    public deleteRoot(): void {
        this.items[0] = this.items[this.items.length - 1];
        this.items = this.items.slice(0, this.items.length - 1);
        this.siftDown(0);
    }

    public max(): number | null {
        return this.items[0] ?? null;
    }

    private siftUp(n: number, i: number): void {
        const parentIndex = Math.floor((i - 1) / 2);

        if (this.items[parentIndex] > 0) {
            if (this.items[i] > this.items[parentIndex]) {
                this.swap(i, parentIndex);
                this.siftUp(n, parentIndex);
            }
        }
    }

    private siftDown(index: number): void {
        let largest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;

        if (left < this.items.length && this.items[left] > this.items[largest])
            largest = left;

        if (right < this.items.length && this.items[right] > this.items[largest])
            largest = right;

        if (largest != index)
        {
            this.swap(index, largest)
            this.siftDown(largest);
        }
    }
}