// Advent of Code - Day 6 - Part Two

import { hasRepeatedCharacters } from "../util";

export function part2(input: string): number {
  let currentIndex = -1;
  while(currentIndex < (input.length - 14)) {
    currentIndex++;
    const code = input.slice(currentIndex, currentIndex + 14);
    if (!hasRepeatedCharacters(code)) {
      break;
    }
  }
  return currentIndex + 14;
}
