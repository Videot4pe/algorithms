/*
  Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
  Notice that the solution set must not contain duplicate triplets.
*/

function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a < b ? -1 : 1)
  let res = []
  let current = 0
  for (current; current < nums.length - 2; current++) {
    if (current > 0 && nums[current] === nums[current - 1]) {
      continue
    }
    let [left, right] = [current + 1, nums.length - 1]
    while (left < right) {
      let sum = nums[left] + nums[right]
      if (sum < -nums[current]) {
        left++
      } else if (sum > -nums[current]) {
        right--
      } else {
        res.push([nums[current], nums[left], nums[right]])
        left++
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
      }
    }
  }
  return res
};

test('Базовый случай', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([[-1, -1, 2], [-1, 0, 1]]);
});

test('Пустой массив', () => {
  expect(threeSum([])).toStrictEqual([]);
});

test('Одно число', () => {
  expect(threeSum([0])).toStrictEqual([]);
});