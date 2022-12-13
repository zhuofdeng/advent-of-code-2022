// Advent of Code - Day 12 - Part Two

import { splitInputInto2DGrid } from "../util";
import { findPosition, getShortestPathLength, getStartingPositions } from "./util";

export function part2(input: string): number {
  const grid = splitInputInto2DGrid(input);
  const endPosition = findPosition(grid, 'E');
  
  const startingPositions = getStartingPositions(grid)
  const shortestPaths: number[] = []

  startingPositions.forEach((position) => {
    shortestPaths.push(getShortestPathLength(grid, position, endPosition))
  })
  
  return shortestPaths.sort((a, b) => a - b)[0];
}
