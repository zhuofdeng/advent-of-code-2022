// Advent of Code - Day 11 - Part One

import { Monkey } from "./monkey";

export function part1(input: string): number {
  const monkies: Monkey[] = [];
  input.split('\n\n').forEach((section, i) => {
    monkies.push(new Monkey(section));
  });

  for(let i = 0; i < 20; i++) {
    monkies.forEach((monkey) => {
     monkey.processItems(monkies);
    });
  }

  monkies.sort((a, b) => b.itemsInspected - a.itemsInspected);
  return monkies[0].itemsInspected * monkies[1].itemsInspected;
}
