// Advent of Code - Day 13 - Part One

import { pairIsInOrder, splitIntoPairsArray } from "./utils";

export function part1(input: string): number {
  const pairs = splitIntoPairsArray(input);

  let sum = 0;
  pairs.forEach((pair, index) => {
    if(pairIsInOrder(pair)) {
      sum += (index + 1)
    }
  })
  return sum;
}
