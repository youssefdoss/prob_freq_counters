'use strict';

/**
 * separatePositive: takes an array of non-zero numbers and puts all positive values first with all negative values after
 * 
 * nums: array
 * 
 * return: array
 */

/*
PSEUDOCODE

If the length of the array is less than 2, return the array

Create two pointers set on the first and last indices of the array

Iterate over the array while left is less than right
    if left is positive
        increment left
    if right is negative
        decrement right
    if right is not negative and left is not positive
        switch the values at the right and left indices in the array

return the original array
*/

function separatePositive(nums) {
    if (nums.length < 2) return nums;

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let leftVal = nums[left];
        let rightVal = nums[right];

        if (leftVal > 0) left++;
        if (rightVal < 0) right--;
        
        if (rightVal > 0 && leftVal < 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
        }
    }

    return nums;
}
