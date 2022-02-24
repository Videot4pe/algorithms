/*
  Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
    0 <= a, b, c, d < n
    a, b, c, and d are distinct.
    nums[a] + nums[b] + nums[c] + nums[d] == target
  You may return the answer in any order.
*/

// function fourSum(nums: number[], target: number): number[][] {
//   nums = nums.sort((a, b) => a - b)
//   let acc = {}
//   let res = []
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (acc[target - nums[i] - nums[j]]) {
//         acc[target - nums[i] - nums[j]].forEach(x => {
//           if (!x.some(y => [i, j].includes(y))) {
//             const current = JSON.stringify([nums[x[0]], nums[x[1]], nums[i], nums[j]].sort((a, b) => a - b))
//             if (!res.some(x => x === current)) {
//               res.push(current)
//             }
//           }
//         })
//       }
//       if (acc[nums[i] + nums[j]]) {
//         if (!acc[nums[i] + nums[j]].every(x => [i, j].includes(x[0])))
//         acc[nums[i] + nums[j]].push([i, j])
//       } else {
//         acc[nums[i] + nums[j]] = [[i, j]]
//       }
//     }
//   }
//   res = res.map(x => JSON.parse(x))
//   return res
// };

function fourSum(nums: number[], target: number): number[][] {
  nums = nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let j = i + 1
    while (j < nums.length - 2) {
      const currentDif = target - (nums[i] + nums[j])
      let [left, right] = [j + 1, nums.length - 1]
      while(left < right) {
        if (nums[left] + nums[right] === currentDif) {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          left++
          while(left < right && nums[left] === nums[left - 1]) {
            left++
          }
        } else if (nums[left] + nums[right] < currentDif) {
          left++
        } else {
          right--
        }
      }
      j++
      while (j < nums.length - 2 && nums[j] === nums[j - 1]) {
        j++
      }
    }
  }
  return res
};

test('', () => {
  expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toStrictEqual([[-2, -1, 1, 2],[-2, 0, 0, 2],[-1, 0, 0, 1]]);
});

test('', () => {
  expect(fourSum([2,2,2,2,2], 8)).toStrictEqual([[2,2,2,2]]);
});

test('', () => {
  expect(fourSum([-2,-1,-1,1,1,2,2], 0)).toStrictEqual([[-2,-1,1,2],[-1,-1,1,1]]);
});

test('', () => {
  expect(fourSum(
    [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90], 
    200
  )).toStrictEqual(
    [[10,10,90,90],[10,20,80,90],[10,30,70,90],[10,30,80,80],[10,40,60,90],[10,40,70,80],[10,50,50,90],[10,50,60,80],[10,50,70,70],[10,60,60,70],[20,20,70,90],[20,20,80,80],[20,30,60,90],[20,30,70,80],[20,40,50,90],[20,40,60,80],[20,40,70,70],[20,50,50,80],[20,50,60,70],[20,60,60,60],[30,30,50,90],[30,30,60,80],[30,30,70,70],[30,40,40,90],[30,40,50,80],[30,40,60,70],[30,50,50,70],[30,50,60,60],[40,40,40,80],[40,40,50,70],[40,40,60,60],[40,50,50,60],[50,50,50,50]]
  );
});