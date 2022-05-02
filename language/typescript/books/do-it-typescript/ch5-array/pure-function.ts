function pure(arr: readonly number[]) {
    console.log(arr)
}

function pureSort(arr: readonly number[]) {
    const deepCopy = [...arr];
    return deepCopy.sort()
}

console.log(pureSort([1,3,5,2,4]))