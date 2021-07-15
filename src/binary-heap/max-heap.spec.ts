import {BinaryMaxHeap} from "./max-heap";

describe("Max Heap", () => {
    it("should create correct heap", () => {
        const maxHeap = new BinaryMaxHeap();

        expect(maxHeap.length()).toBe(0);
        expect(maxHeap.max()).toBeNull();
        expect(maxHeap.toArray()).toEqual([]);

        maxHeap.insert(5);
        expect(maxHeap.length()).toBe(1);
        expect(maxHeap.max()).toBe(5);
        expect(maxHeap.toArray()).toEqual([5]);

        maxHeap.insert(9);
        expect(maxHeap.length()).toBe(2);
        expect(maxHeap.max()).toBe(9);
        expect(maxHeap.toArray()).toEqual([9, 5]);

        maxHeap.insert(10);
        expect(maxHeap.length()).toBe(3);
        expect(maxHeap.max()).toBe(10);
        expect(maxHeap.toArray()).toEqual([10, 5, 9]);

        maxHeap.insert(3);
        expect(maxHeap.length()).toBe(4);
        expect(maxHeap.max()).toBe(10);
        expect(maxHeap.toArray()).toEqual([10, 5,9, 3]);

        maxHeap.deleteRoot();
        expect(maxHeap.length()).toBe(3);
        expect(maxHeap.max()).toBe(9);
        expect(maxHeap.toArray()).toEqual([9,5,3]);
    });
});