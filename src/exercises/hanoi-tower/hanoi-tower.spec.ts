import {Stack} from "../../stack/stack";
import {hanoiTower} from "./hanoi-tower";

const populateTower = (stack: Stack<number>, length: number):void => {
    for(let i = length; i > 0; --i) {
        stack.push(i);
    }
}

describe("Hanoi Tower", () => {
    it("should solve tower with 2 disks", () => {
        const from = new Stack<number>();
        populateTower(from, 2)
        const to = new Stack<number>();
        const buffer = new Stack<number>();

        hanoiTower(from.length(), from, to, buffer);

        expect(from.length()).toBe(0);
        expect(buffer.length()).toBe(0);
        expect(to.length()).toBe(2);
        expect(to.toArray()).toEqual([2,1])
    });

    it("should solve tower with 3 disks", () => {
       const from = new Stack<number>();
       populateTower(from, 3)
       const to = new Stack<number>();
       const buffer = new Stack<number>();

       hanoiTower(from.length(), from, to, buffer);

       expect(from.length()).toBe(0);
       expect(buffer.length()).toBe(0);
       expect(to.length()).toBe(3);
       expect(to.toArray()).toEqual([3,2,1])
    });

    it("should solve tower with 10 disks", () => {
        const from = new Stack<number>();
        populateTower(from, 10)
        const to = new Stack<number>();
        const buffer = new Stack<number>();

        hanoiTower(from.length(), from, to, buffer);

        expect(from.length()).toBe(0);
        expect(buffer.length()).toBe(0);
        expect(to.length()).toBe(10);
        expect(to.toArray()).toEqual([10,9,8,7,6,5,4,3,2,1])
    });
});