function findPairs(arr, targetSum) {
    let seen = new Set();
    let pairs = [];

    for (let num of arr) {
        let complement = targetSum - num;
        if (seen.has(complement)) {
            pairs.push([num, complement]);
        }
        seen.add(num);
    }

    return pairs;
}

console.log(findPairs([4, 5, 9, 1, 6, 3, 15, 21], 9));
