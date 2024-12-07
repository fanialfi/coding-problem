/**
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums) {
  let result = [];
  result[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i] + result[i - 1];
  }
  return result;
}

const result = runningSum([1, 2, 3, 4]);
console.log(result);
