// Advent of Code - Day 13 - Part Two

import { splitIntoPairsArray, pairIsInOrder } from "./utils";

// sort in accending order.
// bubble sort.. maybe optimize it..
const sort = (a: string, b: string) => {
  return pairIsInOrder([a, b]) ? -1 : 1; 
}

export function part2(input: string): number {
  const pairs = splitIntoPairsArray(input);
  const dividerOne = '[[2]]'
  const dividerTwo = '[[6]]'
  const allPackets = pairs.flat().concat([dividerOne, dividerTwo]);
  allPackets.sort((a, b) => sort(a, b));

  const dividerOneIndex = allPackets.indexOf(dividerOne) + 1;
  const dividerTwoIndex = allPackets.indexOf(dividerTwo) + 1;
  return  dividerOneIndex * dividerTwoIndex;
}
