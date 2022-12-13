// Advent of Code - Day 12 - Part One

import { splitInputInto2DGrid } from "../util";
import { findPosition, getShortestPathLength } from "./util";


export function part1(input: string): number {
  const grid = splitInputInto2DGrid(input)
  const startPosition = findPosition(grid, 'S');
  const endPosition = findPosition(grid, 'E');
  return getShortestPathLength(grid, startPosition, endPosition);
}
