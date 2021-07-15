import {Queue} from "./queue";

describe("Queue", () => {
    it("should create empty queue", () => {
       const queue = new Queue();
       expect(queue.length()).toBe(0);
    });

    it("should create queue and fill it", () => {
        const queue = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.length()).toBe(3);
        expect(queue.last()).toBe(3);
        expect(queue.first()).toBe(1);

        expect(queue.dequeue()).toBe(1);
        expect(queue.length()).toBe(2);
        expect(queue.last()).toBe(3);
        expect(queue.first()).toBe(2);

        expect(queue.dequeue()).toBe(2);
        expect(queue.length()).toBe(1);
        expect(queue.last()).toBe(3);
        expect(queue.first()).toBe(3);

        expect(queue.dequeue()).toBe(3);
        expect(queue.length()).toBe(0);
        expect(queue.last()).toBe(null);
        expect(queue.first()).toBe(null);
    });
});