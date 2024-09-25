/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let kIndex = 0;

    nums.forEach((num) => {
        if(num !== val)
            nums[kIndex++] = num;
    });

    return kIndex;
};

const nums = [3,2,2,3], val = 3;
removeElement(nums, val);