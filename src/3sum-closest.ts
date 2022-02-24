/*
  Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
  Return the sum of the three integers.
  You may assume that each input would have exactly one solution.
*/

function threeSumClosest(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a < b ? -1 : 1)
  const length = nums.length
  let [res, current] = [-Infinity, 0]
  for (current; current < length - 1; current++) {
    if (current > 0 && nums[current] === nums[current - 1]) {
      continue
    }
    let [left, right] = [current + 1, length]
    const currentValue = nums[current]
    while (left < right) {
      const sum = currentValue + nums[left] + nums[right]
      if (sum === target) {
        return sum
      } else if (sum < target) {
        if (Math.abs(target - sum) < Math.abs(target - res)) {
          res = sum
        }
        left++
      } else {
        if (Math.abs(target - sum) < Math.abs(target - res)) {
          res = sum
        }
        right--
      }
    }
  }
  return res
};

test('Базовый случай', () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
});

test('Нули', () => {
  expect(threeSumClosest([0, 0, 0], 1)).toBe(0)
});