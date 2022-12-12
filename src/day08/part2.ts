// Advent of Code - Day 8 - Part Two

import { splitInputInto2DNumberGrid } from "../util";

const getRowScore = (grid: number[][], rowIndex: number, startIndex: number, endIndex: number, currentValue: number): number => {
  const row = grid[rowIndex].slice(startIndex, endIndex);
  let i = 0;
  if (startIndex === 0) {
    row.reverse();
  }

  for(i; i < row.length; i++) {
    if (row[i] >= currentValue) {
      i++;
      break;
    }
  }
  return i;
}

const getColumnScore = (grid: number[][], columnIndex: number, startIndex: number, endIndex: number, currentValue: number): number => {
  const column = [];
  let j = 0;
  for(let row = startIndex; row < endIndex; row++) {
    column.push(grid[row][columnIndex])
  }
  if (startIndex === 0) {
    column.reverse();
  }
  for(j; j < column.length; j++) {
    if (column[j] >= currentValue) {
      j++;
      break;
    }
  }
  return j;
}

export function part2(input: string): number {
  const grid:number[][] = splitInputInto2DNumberGrid(input);
  let scores: number[] = []
  
  for(let row = 1; row < grid[0].length - 1; row++) {
    for(let column = 1; column < grid.length - 1; column++) {
      const current = grid[row][column];
      if (current === 0) {
        continue;
      }
      
      const leftScore = getRowScore(grid, row, 0, column, current);
      const rightScore = getRowScore(grid, row, column + 1, grid.length, current);
      const topScore = getColumnScore(grid, column, 0, row, current);
      const bottomScore = getColumnScore(grid, column, row+1, grid.length, current);

      const score = leftScore * rightScore * topScore * bottomScore;
      scores.push(score);
    }
  }
  return scores.sort((a, b) => b - a)[0];
}
