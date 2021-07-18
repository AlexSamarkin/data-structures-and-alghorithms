import {Stack} from "../../stack/stack";

export const hanoiTower = (count: number, from: Stack<number>, to: Stack<number>, middle: Stack<number>): void => {
   if (!count) {
       return;
   }

   hanoiTower(count - 1, from, middle, to);
   move(from, to);
   hanoiTower(count - 1, middle, to, from);
}

const move = (from: Stack<number>, to: Stack<number>): void => {
    if (from.length()) {
        to.push(from.pop() as number);
    }
}

