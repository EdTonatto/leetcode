/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    visited = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in visited)
            return [i, visited[diff]];
        visited[nums[i]] = i;
    };
};