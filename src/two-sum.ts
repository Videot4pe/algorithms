// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// https://leetcode.com/problems/two-sum/


function twoSumFirstTry(nums: number[], target: number): number[] {
  let hashMap: Record<number, number> = {}

  for (const [index, num] of nums.entries()) {
    if (hashMap[num] != undefined) {
      return [hashMap[num], index]
    }
    hashMap[target - num] = index
  }

  return []
};

function twoSumModified(nums: number[], target: number): number[] {
  let hashMap: Record<number, number> = {}

  for (let index = 0; index < nums.length; index++) {
    if (hashMap[nums[index]] != undefined) {
      return [hashMap[nums[index]], index]
    }
    hashMap[target - nums[index]] = index
  }

  return []
}; // Быстрее


console.log(twoSumModified([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSumModified([3, 2, 4], 6)) // [1, 2]
console.log(twoSumModified([3, 3], 6)) // [0, 1]