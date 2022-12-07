// Advent of Code - Day 6 - Part One

import { hasRepeatedCharacters } from "../util";

export function part1(input: string): number {
  let currentIndex = -1;
  while(currentIndex < (input.length - 4)) {
    currentIndex++;
    const code = input.slice(currentIndex, currentIndex + 4);
  
    if (!hasRepeatedCharacters(code)) {
      break;
    }
  }
  return currentIndex + 4;
}
