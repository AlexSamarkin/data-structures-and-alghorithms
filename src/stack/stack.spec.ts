import {Stack} from "./stack";

describe("Stack", () => {
   it('should create stack', () => {
      const stack = new Stack<number>();

      expect(stack.length()).toBe(0);
      expect(stack.max()).toBeNull();
      expect(stack.min()).toBeNull();

      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      stack.push(5);
      stack.push(10);
      stack.push(6);

      expect(stack.length()).toBe(7);
      expect(stack.max()).toBe(10);
      expect(stack.min()).toBe(1);

      stack.pop();
      stack.pop();

       expect(stack.length()).toBe(5);
       expect(stack.max()).toBe(5);
       expect(stack.min()).toBe(1);
   });
});