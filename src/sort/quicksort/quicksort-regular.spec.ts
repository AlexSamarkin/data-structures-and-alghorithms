import {quickSort} from "./quicksort-regular";

describe("Quick Sort Regular", () => {
    it("should sort sorted array", () => {
        const arr = [3, 10, 5, 1, 2, 20];
        quickSort(arr);
        expect(arr).toEqual([1, 2, 3, 5, 10, 20])
    });

    it("should sort array with even length", () => {
        const arr = [6,3,8,1];
        quickSort(arr);
        expect(arr).toEqual([1,3,6,8])
    });

    it("should sort array", () => {
        const arr = [6,3,2];
        quickSort(arr);
        expect(arr).toEqual([2,3,6])
    });

    it("should sort array with 2 items", () => {
        const arr = [2, 1];
        quickSort(arr);
        expect(arr).toEqual([1, 2])
    });

    it("should sort one element array", () => {
        const arr = [1];
        quickSort(arr);
        expect(arr).toEqual([1])
    });

    it("should sort empty array", () => {
        const arr: number[] = [];
        quickSort(arr);
        expect(arr).toEqual([])
    });
})