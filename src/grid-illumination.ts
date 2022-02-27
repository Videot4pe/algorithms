/*
  There is a 2D grid of size n x n where each cell of this grid has a lamp that is initially turned off.
  You are given a 2D array of lamp positions lamps, where lamps[i] = [rowi, coli] indicates that the lamp at grid[rowi][coli] is turned on. 
  Even if the same lamp is listed more than once, it is turned on.
  When a lamp is turned on, it illuminates its cell and all other cells in the same row, column, or diagonal.
  You are also given another 2D array queries, where queries[j] = [rowj, colj]. 
  For the jth query, determine whether grid[rowj][colj] is illuminated or not. 
  After answering the jth query, turn off the lamp at grid[rowj][colj] and its 8 adjacent lamps if they exist. 
  A lamp is adjacent if its cell shares either a side or corner with grid[rowj][colj].
  Return an array of integers ans, where ans[j] should be 1 if the cell in the jth query was illuminated, or 0 if the lamp was not.
*/

function isVertical(lamp: number[], point: number[]) {
  return lamp[0] === point[0]
}

function isHorizontal(lamp: number[], point: number[]) {
  return lamp[1] === point[1]
}

function isDiagonal(lamp: number[], point: number[]) {
  return Math.abs(lamp[1] - point[1]) === Math.abs(lamp[0] - point[0])
}

function isLighten(lamps: number[][], point: number[]) {
  for (const lamp of lamps) {
    if (isVertical(lamp, point) || isHorizontal(lamp, point) || isDiagonal(lamp, point)) {
      return true
    }
  }
  return false
}

function turnOff(lamps: number[][], point: number[]) {
  return lamps.filter(lamp => Math.abs(lamp[0] - point[0]) > 1 || Math.abs(lamp[1] - point[1]) > 1)
}

function gridIllumination(n: number, lamps: number[][], queries: number[][]): number[] {
  const res = []
  queries.forEach(query => {
    const isPointLighten = isLighten(lamps, query) ? 1 : 0
    lamps = turnOff(lamps, query)
    res.push(isPointLighten)
  })
  return res
};

test('', () => {
  expect(gridIllumination(6, [[1, 1]], [[2,0],[1,0]])).toStrictEqual([1, 0]);
});

test('', () => {
  expect(gridIllumination(5, [[0,0],[4,4]], [[1,1],[1,0]])).toStrictEqual([1, 0]);
});

test('', () => {
  expect(gridIllumination(5, [[0,0],[4,4]], [[1,1],[1,1]])).toStrictEqual([1, 1]);
});

test('', () => {
  expect(gridIllumination(5, [[0,0],[0,4]], [[0,4],[0,1],[1,4]])).toStrictEqual([1,1,0]);
});