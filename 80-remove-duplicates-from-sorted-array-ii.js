/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let kIndex = 0;

    nums.forEach((num) => {
        if(kIndex === 0 || kIndex === 1 || nums[kIndex - 2] !== num) {
            nums[kIndex++] = num;
        }
    })

    return kIndex;
};

// const nums = [1,1,1,2,2,3];
const nums = [0,0,1,1,1,1,2,3,3];
console.log(removeDuplicates(nums));
console.log(nums);