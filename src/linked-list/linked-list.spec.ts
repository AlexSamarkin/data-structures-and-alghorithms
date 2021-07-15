import { LinkedList } from "./linked-list";
import LinkedListNode from "./linked-list-node";

describe("Linked List", () => {
    it('should create list from array', () => {
       const array: number[] = [1,2,5,3,4,6];
       const list = LinkedList.fromArray<number>(array);
       const toArray: number[] = list.toArray();

       expect(array).toEqual(toArray);
    });

    it("should get an item", () => {
        const array: number[] = [1,2,5,3];
        const list = LinkedList.fromArray<number>(array);

        expect(list.get(0)?.value).toBe(1);
        expect(list.get(1)?.value).toBe(2);
        expect(list.get(2)?.value).toBe(5);
        expect(list.get(3)?.value).toBe(3);
        expect(list.get(43)).toBeNull();
    });

    it("should return correct length of list", () => {
        let array: number[] = [1,2,5,3];
        let list = LinkedList.fromArray<number>(array);

        expect(list.length()).toBe(4);

        array = [1];
        list = LinkedList.fromArray<number>(array);

        expect(list.length()).toBe(1);

        array = [];
        list = LinkedList.fromArray<number>(array);

        expect(list.length()).toBe(0);
    });

    it("should return reversed list", () => {
        const array: number[] = [1,2,5,3,6];
        const list = LinkedList.fromArray<number>(array);

        const reversed = list.reverse();
        array.reverse();
        expect(array).toEqual(reversed.toArray());
    });

    it("should return is looped", () => {
        const array: number[] = [1,2,5,3,6];
        const list = LinkedList.fromArray<number>(array);
        const last = list.get(4) as LinkedListNode<number>;
        last.next = list.head;

        expect(list.isLooped()).toBe(true);

        last.next = null;

        expect(list.isLooped()).toBe(false);
    });

    it("should add items", () => {
        const array: number[] = [1,2,5,3,6];
        const list = LinkedList.fromArray<number>(array);
        list.add(7);

        expect(list.length()).toBe(6);
        expect(list.toArray()).toEqual([1,2,5,3,6,7])
        expect(list.get(4)?.next).toBe(list.get(5));
        expect(list.get(5)?.value).toBe(7);

    });

    it("should remove item", () => {
        const array: number[] = [1,2,5,3,6];
        const list = LinkedList.fromArray<number>(array);

        list.delete(4);

        expect(list.length()).toBe(4);
        expect(list.toArray()).toEqual([1,2,5,3])

        list.delete(2);

        expect(list.length()).toBe(3);
        expect(list.toArray()).toEqual([1,2,3])

        list.delete(0);

        expect(list.length()).toBe(2);
        expect(list.toArray()).toEqual([2,3])
    });

    it("should remove item by cb", () => {
        const array: number[] = [1,2,5,3,6];
        const list = LinkedList.fromArray<number>(array);

        list.deleteBy((node: LinkedListNode<number>) => {
            return node.value === 6;
        });

        expect(list.length()).toBe(4);
        expect(list.toArray()).toEqual([1,2,5,3])

        list.deleteBy((node: LinkedListNode<number>) => {
            return node.value === 5;
        });

        expect(list.length()).toBe(3);
        expect(list.toArray()).toEqual([1,2,3])

        list.deleteBy((node: LinkedListNode<number>) => {
            return node.value === 1;
        });

        expect(list.length()).toBe(2);
        expect(list.toArray()).toEqual([2,3])
    });

    it("should find node", () => {
        const array: number[] = [1,2,5,3,6];
        const list = LinkedList.fromArray<number>(array);

        let found = list.find((node: LinkedListNode<number>) => {
            return node.value === 5;
        });

        expect(found).toBe(list.get(2));

        found = list.find((node: LinkedListNode<number>) => {
            return node.value === 101;
        });

        expect(found).toBeUndefined();
    })
})