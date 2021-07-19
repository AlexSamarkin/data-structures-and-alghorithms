
export const merge = (arr: number[], start: number, endFirst: number, end: number): void => {
    const left: number[] = [];
    const right: number[] = [];

    const l = endFirst - start;
    const r = end - endFirst + 1;

    for(let i = 0; i < l; ++i) {
        left[i] = arr[i + start];
    }

    for(let j = 0; j < r; ++j) {
        right[j] = arr[j + endFirst];
    }

    left.push(Infinity);
    right.push(Infinity);
    let i = 0;
    let j = 0;

    for(let k = start; k <= end; ++k) {
        if (left[i] < right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
    }
}

export const recMergeSort = (arr: number[], start: number, end: number): void => {
    if (start >= end) {
        return;
    }

    const middle = Math.floor((start + end ) / 2);
    recMergeSort(arr, start, middle);
    recMergeSort(arr, middle + 1, end);
    merge(arr, start, middle + 1, end);
}


export const mergeSort = (arr: number[]): void => {
    recMergeSort(arr, 0, arr.length - 1);
}