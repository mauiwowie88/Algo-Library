let arr1 = [18];
let arr2 = [];

const merge = (a1, a2, m, n) => {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (j >= 0) {
        if (a1[i] > a2[j]) {
            a1[k] = a1[i];
            i--;
        } else {
            a1[k] = a2[j];
            j--;
        }
        k--;
    }
    return a1;
}

console.log(merge(arr1, arr2, 1, 0))