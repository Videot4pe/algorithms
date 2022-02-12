// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// https://leetcode.com/problems/median-of-two-sorted-arrays/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let [length1, length2] = [nums1.length, nums2.length]
  const totalLength = length1 + length2

  if (length1 > length2) {
    [nums1, nums2, length1, length2] = [nums2, nums1, length2, length1]
  }

  let [low, high] = [0, length1]

  while (low <= high) {
    const partition1 = Math.floor((low + high) / 2)
    const partition2 = Math.floor((totalLength + 1) / 2) - partition1

    const maxLeft1 = partition1 ? nums1[partition1 - 1] : -Infinity
    const minRight1 = partition1 < length1 ? nums1[partition1] : Infinity

    const maxLeft2 = partition2 ? nums2[partition2 - 1] : -Infinity
    const minRight2 = partition2 < length2 ? nums2[partition2] : Infinity

    if (maxLeft1 > minRight2) {
      high = partition1 - 1
    } else if (maxLeft2 > minRight1) {
      low = partition1 + 1
    } else {
      if (totalLength % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
      } else {
        return Math.max(maxLeft1, maxLeft2)
      }
    }
  }
  return 0
};

console.log(findMedianSortedArrays([1, 2], [3])) // 2.00000
console.log(findMedianSortedArrays([1, 2], [3, 4])) // 2.50000
console.log(findMedianSortedArrays([1, 2, 6], [2, 3, 4, 8]))
console.log(findMedianSortedArrays([5, 6], [1, 2]))
