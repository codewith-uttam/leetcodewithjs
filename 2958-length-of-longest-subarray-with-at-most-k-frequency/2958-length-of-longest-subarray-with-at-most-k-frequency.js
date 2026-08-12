/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
    const n = nums.length;
    let count = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < n; right++) {
        count.set(nums[right], (count.get(nums[right]) || 0) + 1);

        while (count.get(nums[right]) > k) {
            count.set(nums[left], count.get(nums[left]) - 1);
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};