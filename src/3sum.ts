/*
  Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
  Notice that the solution set must not contain duplicate triplets.
*/

function threeSum(nums: number[]): number[][] {
  return [[]]
};

test('basic', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toBe([[-1, -1, 2], [-1, 0, 1]]);
});