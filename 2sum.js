function twoSum(arr, target) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] == target) {
                console.log(i, ' and ', j, " Are the answer")
                return [i, j];
            }
        }
        return []
    }
}

// let nums = [2, 5, 10, 6, 3, 7, 9];
// let target = 11;
// 
// console.log(twoSum(nums, target))



function twoSumOptimized(arr, target) {

    let seen = {}
    for (let i = 0; i < arr.length; i++) {

        let con = target - arr[i];


        if (seen[con] !== undefined) {
            return [seen[con], i]
        }
        seen[arr[i]] = nums[i]

    }


}

let nums = [2, 5, 10, 6, 3, 7, 9];
let target = 11;

// console.log(twoSum(nums, target))


console.log(twoSumOptimized(nums, target))