/*
  Given the root of a binary tree, determine if it is a valid binary search tree (BST).

  A valid BST is defined as follows:
  The left subtree of a node contains only nodes with keys less than the node's key.
  The right subtree of a node contains only nodes with keys greater than the node's key.
  Both the left and right subtrees must also be binary search trees.
*/

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

enum Direction {
  Left = 'Left',
  Right = 'Right'
}

function isValidBranch(node: TreeNode | null, rootValue: number, direction: Direction, min: number | null, max: number | null): boolean {
  if (!node) {
    return true
  }
  if ((max != null && node.val >= max) || (min != null && node.val <= min)) {
    return false
  }
  return isValidBranch(node.left, node.val, Direction.Left, min, node.val) && isValidBranch(node.right, node.val, Direction.Right, node.val, max)
}

function isValidBST(root: TreeNode | null): boolean {
  return isValidBranch(root.left, root.val, Direction.Left, null, root.val) && isValidBranch(root.right, root.val, Direction.Right, root.val, null)
};

test('', () => {
  expect(isValidBST({
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  })).toBe(true);
});

test('', () => {
  expect(isValidBST({
    val: 0,
    left: {
      val: null,
      left: null,
      right: null
    },
    right: {
      val: -1,
      left: null,
      right: null,
    },
  })).toBe(false);
});