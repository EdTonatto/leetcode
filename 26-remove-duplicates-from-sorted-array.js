/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let kIndex = 0;

    nums.forEach((num, index) => {
        if (index === 0) nums[kIndex++] = num;
        if (index > 0)
            if (num !== nums[index - 1]) {
                nums[kIndex++] = nums[index];
            }
    });

    return kIndex;
};

// const nums = [1,1,2];
const nums = [0,0,1,1,1,2,2,3,3,4]
// removeDuplicates(nums);
console.log(removeDuplicates(nums))
console.log(nums);