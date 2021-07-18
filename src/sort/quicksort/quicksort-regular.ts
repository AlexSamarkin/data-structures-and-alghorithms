import {swap} from "./quicksort";

export const recQuicksort = (arr: number[], start: number, end: number): void => {
    if (start >= end) {
        return;
    }

    const middle = Math.floor((start + end) / 2);
    const pivot = arr[middle];

    let i = start;
    let j = end;

    do {
        while(arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;

        if (i <= j) {
            swap(arr, i++, j--);
        }
    } while (i <= j);

    recQuicksort(arr, start, j);
    recQuicksort(arr, i, end);
}

export const quickSort = (arr: number[]): void => {
    recQuicksort(arr, 0, arr.length - 1);
}