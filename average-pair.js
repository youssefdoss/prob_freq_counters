'use strict';

/**
 * averagePair: Check to see if any two numbers in a sorted array of numbers average the input average target
 * 
 * nums: array
 * targetAvg: number
 * 
 * return: boolean
 */

/*
PSEUDOCODE

If the input array length is less than 2 return false

Set left and right to be the first and last indices of the input array

Initialize a while loop with the condition of left being less than right
    Check if the average of the values at left and right equals the average target
        If so, return true
    Check if the average of the values at left and right is greater than the average target
        If so, decrement right
    Otherwise
        Increment left

Return false
*/

function averagePair(nums, targetAvg) {
    if (nums.length < 2) return false;

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if ((nums[left] + nums[right]) / 2 === targetAvg) {
            return true;
        } else if ((nums[left] + nums[right]) / 2 > targetAvg) {
            right--;
        } else {
            left++;
        }
    }

    return false;
}

