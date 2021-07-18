import {swap} from "./quicksort";

export const medianOfThree = (arr: number[], start: number, end: number): number => {
    const center = Math.floor((start + end) / 2);
    if (arr[start] > arr[center]) {
        swap(arr, start, center);
    }

    if (arr[start] > arr[end]) {
        swap(arr, start, end);
    }

    if (arr[center] > arr[end]) {
        swap(arr, center, end);
    }

    swap(arr, center, end - 1);

    return arr[end - 1];
}

export const manualSort = (arr: number[], start: number, end: number): void => {
    const size = end - start + 1;

    if (size <= 1) {
        return;
    }

    if (size === 2) {
        if (arr[start] > arr[end]) {
            swap(arr, start, end);
        }
        return;
    }

    if (size === 3) {
        if (arr[start] > arr[end - 1])
            swap(arr, start, end - 1);
        if (arr[start] > arr[end])
            swap(arr, start, end);
        if (arr[end - 1] > arr[end])
            swap(arr, end - 1, end);
    }
}

export const partition = (arr: number[], start: number, end: number, pivot: number): number => {
    let i = start;
    let j = end - 1;

    while(true) {
       while(arr[++i] < pivot);
       while(arr[--j] > pivot);

       if (i >= j) {
           break;
       }

       swap(arr, i, j);
    }

    swap(arr, i, end - 1);
    return i;
}

export const recQuickSort = (arr: number[], start: number, end: number): void => {
    const size = end - start + 1;

    if (size <= 3) {
       manualSort(arr, start, end);
       return;
    }

    const median = medianOfThree(arr, start, end);
    const part = partition(arr, start, end, median);
    recQuickSort(arr, start, part - 1);
    recQuickSort(arr, part + 1, end);
}

export const quickSort = (arr: number[]): void => {
    recQuickSort(arr, 0, arr.length - 1);
}
