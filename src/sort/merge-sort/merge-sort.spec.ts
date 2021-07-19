import {mergeSort} from "./merge-sort";

describe("Merge Sort", () => {
   it("should sort array of 0 elements", () => {
      const arr = [];
      mergeSort(arr);
      expect(arr).toEqual([]);
   });

   it("should sort array of 1 element", () => {
      const arr = [1];
      mergeSort(arr);
      expect(arr).toEqual([1]);
   });

   it("should sort array of 2 elements", () => {
      const arr = [2,1];
      mergeSort(arr);
      expect(arr).toEqual([1,2]);
   });

   it("should sort array of 3 elements", () => {
      const arr = [2,0,1];
      mergeSort(arr);
      expect(arr).toEqual([0,1,2]);
   });

   it("should sort array of 10 elements", () => {
      const arr = [2,0,1,23,5,34,21,3,9,10];
      mergeSort(arr);
      expect(arr).toEqual([0,1,2,3,5,9,10,21,23,34]);
   });
});