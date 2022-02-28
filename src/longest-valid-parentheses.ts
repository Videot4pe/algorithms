/*
  Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
*/

function longestValidParentheses(s: string): number {
  let stack = []
  stack.push(0)
  s.split('').forEach(c => {
    if (c === ')' && stack[stack.length - 1] === '(') {
      stack.pop()
      stack.push(2)
    } else if (c === ')') {
      let pushed = false
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i] === '(') {
          stack[i] = 2
          pushed = true
          break
        } else if (stack[i] === ')') {
          stack.push(c)
          pushed = true
          break
        }
      }
      if (!pushed) {
        stack.push(c)
      }
    } else {
      stack.push(c)
    }
  })
  let max = 0
  for (let i = 0; i < stack.length; i++) {
    if (typeof stack[i] === 'number') {
      if (i < stack.length - 1 && typeof stack[i + 1] === 'number') {
        stack[i + 1] += stack[i]
        if (stack[i + 1] > max) {
          max = stack[i + 1]
        }
      } else {
        if (stack[i] > max) {
          max = stack[i]
        }
      }
    }
  }
  return max
};

test('', () => {
  expect(longestValidParentheses(')()())()()(')).toBe(4);
});

test('', () => {
  expect(longestValidParentheses('((()))())')).toBe(8);
});

test('', () => {
  expect(longestValidParentheses('()(())')).toBe(6);
});

test('', () => {
  expect(longestValidParentheses('(()')).toBe(2);
});

test('', () => {
  expect(longestValidParentheses(')()())')).toBe(4);
});

test('', () => {
  expect(longestValidParentheses('()(()')).toBe(2);
});

test('', () => {
  expect(longestValidParentheses('(')).toBe(0);
});

test('', () => {
  expect(longestValidParentheses(')')).toBe(0);
});

test('', () => {
  expect(longestValidParentheses(')))(')).toBe(0);
});

test('', () => {
  expect(longestValidParentheses(')())')).toBe(2);
});

test('', () => {
  expect(longestValidParentheses('')).toBe(0);
});