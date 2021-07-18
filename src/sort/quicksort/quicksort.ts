const partition = (arr: number[], start: number, end: number): number => {
    let i = start - 1;
    let j = start;
    let pivot = arr[end];

    while (j < end) {
        if (arr[j] < pivot) {
            swap(arr, ++i, j);
        }
        j++;
    }

    swap(arr, i + 1, end);
    return i + 1;
}

const recQuickSort = (arr: number[], start: number, end: number): void => {
    if (start >= end) {
        return;
    }

    const part = partition(arr, start, end);
    recQuickSort(arr, start, part - 1);
    recQuickSort(arr, part + 1, end);
};

export const swap = (arr: number[], i: number, j: number): void => {
    const cache = arr[i];
    arr[i] = arr[j];
    arr[j] = cache;
};

export const quickSort = (arr: number[]): void =>  {
    recQuickSort(arr, 0, arr.length - 1);
}




