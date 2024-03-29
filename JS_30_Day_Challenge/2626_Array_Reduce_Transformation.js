/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let len = nums.length;
    let sum = init;
    for(let i = 0; i < len; i++)
        {
           sum = fn(sum ,nums[i]);
        }
     return sum;
};
