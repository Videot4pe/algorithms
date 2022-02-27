/*
  The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
  Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
  Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
*/

function possiblePositions(n: number, row: number, existingColumns: number[]) {
  if (row === n) {
    return existingColumns
  }
  const res = []
  for (let i = 0; i < n; i++) {
    const copiedColumns = [...existingColumns]
    let canPlace = true
    for (let j = 0; j < existingColumns.length; j++) {
      if (existingColumns[j] === i) {
        canPlace = false
        break;
      }
      if (Math.abs(j - row) === Math.abs(existingColumns[j] - i)) {
        canPlace = false
        break;
      }
    }
    if (!canPlace) {
      continue
    }
    copiedColumns.push(i)
    const solutions = possiblePositions(n, row + 1, copiedColumns)
    if (solutions.length) {
      res.push(solutions)
    }  
  }
  return res.flat()
}

function solveNQueens(n: number): string[][] {
  if (n === 1) {
    return [['Q']]
  }
  const solutions = possiblePositions(n, 0, [])
  const res = []
  let solution = []
  for (let i = 0; i < solutions.length; i++) {
    let str = []
    for (let j = 0; j < n; j++) {
      if (solutions[i] === j) {
        str.push('Q')
      } else {
        str.push('.')
      }
    }
    solution.push(str.join(''))
    if (solution.length === n) {
      res.push(solution)
      solution = []
    }
  }
  return res
};

test('', () => {
  expect(solveNQueens(5)).toStrictEqual(
    [
      ["Q....","..Q..","....Q",".Q...","...Q."],
      ["Q....","...Q.",".Q...","....Q","..Q.."],
      [".Q...","...Q.","Q....","..Q..","....Q"],
      [".Q...","....Q","..Q..","Q....","...Q."],
      ["..Q..","Q....","...Q.",".Q...","....Q"],
      ["..Q..","....Q",".Q...","...Q.","Q...."],
      ["...Q.","Q....","..Q..","....Q",".Q..."],
      ["...Q.",".Q...","....Q","..Q..","Q...."],
      ["....Q",".Q...","...Q.","Q....","..Q.."],
      ["....Q","..Q..","Q....","...Q.",".Q..."]
    ]
  )
});

test('', () => {
  expect(solveNQueens(4)).toStrictEqual([[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]);
});

test('', () => {
  expect(solveNQueens(1)).toStrictEqual([["Q"]]);
});

test('', () => {
  expect(solveNQueens(7)).toStrictEqual([
    ["Q......","..Q....","....Q..","......Q",".Q.....","...Q...",".....Q."],
    ["Q......","...Q...","......Q","..Q....",".....Q.",".Q.....","....Q.."],
    ["Q......","....Q..",".Q.....",".....Q.","..Q....","......Q","...Q..."],
    ["Q......",".....Q.","...Q...",".Q.....","......Q","....Q..","..Q...."],
    [".Q.....","...Q...","Q......","......Q","....Q..","..Q....",".....Q."],
    [".Q.....","...Q...",".....Q.","Q......","..Q....","....Q..","......Q"],
    [".Q.....","....Q..","Q......","...Q...","......Q","..Q....",".....Q."],
    [".Q.....","....Q..","..Q....","Q......","......Q","...Q...",".....Q."],
    [".Q.....","....Q..","......Q","...Q...","Q......","..Q....",".....Q."],
    [".Q.....",".....Q.","..Q....","......Q","...Q...","Q......","....Q.."],
    [".Q.....","......Q","....Q..","..Q....","Q......",".....Q.","...Q..."],
    ["..Q....","Q......",".....Q.",".Q.....","....Q..","......Q","...Q..."],
    ["..Q....","Q......",".....Q.","...Q...",".Q.....","......Q","....Q.."],
    ["..Q....","....Q..","......Q",".Q.....","...Q...",".....Q.","Q......"],
    ["..Q....",".....Q.",".Q.....","....Q..","Q......","...Q...","......Q"],
    ["..Q....","......Q",".Q.....","...Q...",".....Q.","Q......","....Q.."],
    ["..Q....","......Q","...Q...","Q......","....Q..",".Q.....",".....Q."],
    ["...Q...","Q......","..Q....",".....Q.",".Q.....","......Q","....Q.."],
    ["...Q...","Q......","....Q..",".Q.....",".....Q.","..Q....","......Q"],
    ["...Q...",".Q.....","......Q","....Q..","..Q....","Q......",".....Q."],
    ["...Q...",".....Q.","Q......","..Q....","....Q..","......Q",".Q....."],
    ["...Q...","......Q","..Q....",".....Q.",".Q.....","....Q..","Q......"],
    ["...Q...","......Q","....Q..",".Q.....",".....Q.","Q......","..Q...."],
    ["....Q..","Q......","...Q...","......Q","..Q....",".....Q.",".Q....."],
    ["....Q..","Q......",".....Q.","...Q...",".Q.....","......Q","..Q...."],
    ["....Q..",".Q.....",".....Q.","..Q....","......Q","...Q...","Q......"],
    ["....Q..","..Q....","Q......",".....Q.","...Q...",".Q.....","......Q"],
    ["....Q..","......Q",".Q.....","...Q...",".....Q.","Q......","..Q...."],
    ["....Q..","......Q",".Q.....",".....Q.","..Q....","Q......","...Q..."],
    [".....Q.","Q......","..Q....","....Q..","......Q",".Q.....","...Q..."],
    [".....Q.",".Q.....","....Q..","Q......","...Q...","......Q","..Q...."],
    [".....Q.","..Q....","Q......","...Q...","......Q","....Q..",".Q....."],
    [".....Q.","..Q....","....Q..","......Q","Q......","...Q...",".Q....."],
    [".....Q.","..Q....","......Q","...Q...","Q......","....Q..",".Q....."],
    [".....Q.","...Q...",".Q.....","......Q","....Q..","..Q....","Q......"],
    [".....Q.","...Q...","......Q","Q......","..Q....","....Q..",".Q....."],
    ["......Q",".Q.....","...Q...",".....Q.","Q......","..Q....","....Q.."],
    ["......Q","..Q....",".....Q.",".Q.....","....Q..","Q......","...Q..."],
    ["......Q","...Q...","Q......","....Q..",".Q.....",".....Q.","..Q...."],
    ["......Q","....Q..","..Q....","Q......",".....Q.","...Q...",".Q....."]
  ]);
});

test('', () => {
  expect(solveNQueens(6)).toStrictEqual([
    [".Q....","...Q..",".....Q","Q.....","..Q...","....Q."],
    ["..Q...",".....Q",".Q....","....Q.","Q.....","...Q.."],
    ["...Q..","Q.....","....Q.",".Q....",".....Q","..Q..."],
    ["....Q.","..Q...","Q.....",".....Q","...Q..",".Q...."]
  ]);
});