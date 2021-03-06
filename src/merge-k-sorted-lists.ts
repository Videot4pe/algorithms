/*
  You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
  Merge all the linked-lists into one sorted linked-list and return it.
*/

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// function addMinNumber(lists: Array<ListNode | null>, res: ListNode | null) {
//   let [minIndex, minValue] = [0, Infinity]
//   for (let i = 0; i < lists.length; i++) {
//     if (lists[i] && lists[i].val < minValue) {
//       minValue = lists[i].val
//       minIndex = i
//     }
//   }
//   lists[minIndex] = lists[minIndex] ? lists[minIndex].next : null
//   res.val = minValue
//   if (lists.some(x => x)) {
//     res.next = {
//       val: null,
//       next: null
//     }
//     addMinNumber(lists, res.next)
//   }
// }

// function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
//   if (!lists.length || (lists.values && !lists.some(x => x))) {
//     return null
//   }
//   const res: ListNode | null = {
//     val: null,
//     next: null
//   }
//   addMinNumber(lists, res)
//   return res
// };

function merge2Lists(list1: ListNode | null, list2: ListNode | null) {
  if (!list1 || list1.val == null) {
    return list2
  }
  if (!list2 || list2.val == null) {
    return list1
  }
  let res: ListNode | null = null
  if (list1.val < list2.val) {
    res = list1
    res.next = merge2Lists(list1.next, list2)
  } else {
    res = list2
    res.next = merge2Lists(list1, list2.next)
  }

  return res
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 1) {
    return lists[0]
  }
  if (!lists.length) {
    return null
  }
  let length = lists.length
  while (length > 0) {
    let [i, j] = [0, length]
    for (; i < j; i++, j--) {
      lists[i] = merge2Lists(lists[i], lists[j])
    }
    length = j
  }
  return lists[0]
};

test('', () => {
  expect(mergeKLists([
    {
      val: 1,
      next: {
        val: 4,
        next: {
          val: 5, next: null
        }
      }
    },
    {
      val: 1,
      next: {
        val: 3,
        next: {
          val: 4, next: null
        }
      }
    },
    {
      val: 2,
      next: {
        val: 6,
        next: null
      }
    },
  ])).toStrictEqual(
    {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 4,
                next: {
                  val: 5,
                  next: {
                    val: 6,
                    next: null
                  }
                }
              }
            }
          }
        }
      }
    },
  );
});

test('', () => {
  expect(mergeKLists([])).toStrictEqual(null);
});

test('', () => {
  expect(mergeKLists([{val: null, next: null}])).toStrictEqual({val: null, next: null});
});