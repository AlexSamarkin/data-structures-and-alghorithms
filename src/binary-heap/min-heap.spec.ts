import {BinaryMinHeap} from "./min-heap";

describe("Min Heap", () => {
   it("should create correct heap", () => {
       const minHeap = new BinaryMinHeap();

       expect(minHeap.length()).toBe(0);
       expect(minHeap.min()).toBeNull();
       expect(minHeap.toArray()).toEqual([]);

       minHeap.insert(5);
       expect(minHeap.length()).toBe(1);
       expect(minHeap.min()).toBe(5);
       expect(minHeap.toArray()).toEqual([5]);

       minHeap.insert(9);
       expect(minHeap.length()).toBe(2);
       expect(minHeap.min()).toBe(5);
       expect(minHeap.toArray()).toEqual([5, 9]);

       minHeap.insert(10);
       expect(minHeap.length()).toBe(3);
       expect(minHeap.min()).toBe(5);
       expect(minHeap.toArray()).toEqual([5, 9, 10]);

       minHeap.insert(3);
       expect(minHeap.length()).toBe(4);
       expect(minHeap.min()).toBe(3);
       expect(minHeap.toArray()).toEqual([3, 5, 10, 9]);

       minHeap.deleteRoot();
       expect(minHeap.length()).toBe(3);
       expect(minHeap.min()).toBe(5);
       expect(minHeap.toArray()).toEqual([5, 9, 10]);
   });
});