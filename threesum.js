function threeSum(arr) {

    let startTime = performance.now()

    let n = arr.length;
    let result = [];
    let seenTriplet = new Set()

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {

            let complement = arr[i] + arr[j]

            for (let k = j + 1; k < n; k++) {

                let sum = arr[i] + arr[j] + arr[k];
                if (sum == 0) {

                    let pair = [arr[i], arr[j], arr[k]].sort((a, b) => a - b);
                    let keyPair = pair.join(',')

                    if (!seenTriplet.has(keyPair)) {
                        seenTriplet.add(keyPair)
                        result.push(pair)
                    }

                }
            }
        }
    }
    endTime = performance.now()

    let executionTimeInSeconds = (endTime - startTime) / 1000;

    console.log(`Execution time of BroutForce method is : ${executionTimeInSeconds.toFixed(6)} seconds`);
    console.log(result)
}

let arr1 = [1, 2, 4, -2, -3, -5, 5, 6, -1, 40, 80, 55, -55, 45, 46, -1];

threeSum(arr1)


function threeSumOptimized(arr) {

    let startTime = performance.now()

    let n = arr.length;

    arr.sort((a, b) => a - b);

    let result = [];

    for (let i = 0; i < n; i++) {
        let j = i + 1;
        let k = n - 1;

        if (i > 0 && arr[i] === arr[i - 1]) continue

        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];

            if (sum < 0) {
                j++
            }
            else if (sum > 0) {
                k--
            }
            else {
                result.push([arr[i], arr[j], arr[k]])
                j++
                k--
                while (j < k && arr[j] === arr[k]) continue
            }
        }

    }

    let endTime = performance.now()

    let executionTimeInSeconds = (endTime - startTime) / 1000;

    console.log(`Execution time of Optimized (two pointers) method is : ${executionTimeInSeconds.toFixed(6)} seconds`);

    console.log(result)

}

let arr = [1, 2, 4, -2, -3, -5, 5, 6, -1, 40, 80, 55, -55, 45, 46, -1];

threeSumOptimized(arr)