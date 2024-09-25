/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let kIndex = nums1.length;
    let mIndex = m - 1;
    let nIndex = n - 1;

    while(nIndex >= 0 && kIndex--) {
        if(mIndex >= 0 && nums1[mIndex] > nums2[nIndex]){
            nums1[kIndex] = nums1[mIndex];
            mIndex--;
            continue;
        }
        nums1[kIndex] = nums2[nIndex];
        nIndex--;
    }

};

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
merge(nums1, m, nums2, n);
console.log(nums1)