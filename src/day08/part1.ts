// Advent of Code - Day 8 - Part One

import { splitInputInto2DGrid } from "../util";

const getRowSorted = (grid: number[][], rowIndex: number, startIndex: number, endIndex: number): number[] => {
  const row = grid[rowIndex].slice(startIndex, endIndex).sort((a, b) => b - a);
  return row;
}

const getColumnSorted = (grid: number[][], columnIndex: number, startIndex: number, endIndex: number): number[] => {
  const column = [];
  for(let row = startIndex; row < endIndex; row++) {
    column.push(grid[row][columnIndex])
  }
  return column.sort((a, b) => b - a);
}

export function part1(input: string): number {
  const grid:number[][] = splitInputInto2DGrid(input);
  let total = ((grid.length - 2) * 2) + (grid.length * 2)
  for(let row = 1; row < grid[0].length - 1; row++) {
    for(let column = 1; column < grid.length - 1; column++) {
      const current = grid[row][column];
      if (current === 0) {
        continue;
      }
      const leftLargest = getRowSorted(grid, row, 0, column)[0];
      const rightLargest = getRowSorted(grid, row, column+1, grid.length)[0];
      const topLargest = getColumnSorted(grid, column, 0, row)[0];
      const bottomLargest = getColumnSorted(grid, column, row+1, grid.length)[0];

      if (leftLargest < current || rightLargest < current || topLargest < current || bottomLargest < current) {
        total += 1;
      }
    }
  }
  return total;
}
