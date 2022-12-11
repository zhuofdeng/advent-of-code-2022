// Advent of Code - Day 11 - Part Two

import { Monkey } from "./monkey";

export function part2(input: string): number {
  const monkies: Monkey[] = [];
  input.split('\n\n').forEach((section, i) => {
    monkies.push(new Monkey(section, true));
  });
  const divider = monkies.map((m) => m.test).reduce((a, b) => a * b, 1);
  for(let i = 0; i < 10000; i++) {
    monkies.forEach((monkey) => {
     monkey.processItems(monkies, divider);
    });
  }

  monkies.sort((a, b) => b.itemsInspected - a.itemsInspected);
  return monkies[0].itemsInspected * monkies[1].itemsInspected;
}
