// Advent of Code - Day 14 - Part Two

import { Position } from "../util";
import { nextPossiblePosition } from "./utils";

export function part2(input: string): number {
  const rockPaths = input.split('\n').map((line => line.split(' -> ').map((v) => v.split(',').map((s) => parseInt(s)))));
  const occupiedList = new Set<string>();
  let maxY = 0;
  rockPaths.forEach((paths) => {
    for(let i = 0; i < paths.length -1; i++) {
      const currentValue = paths[i];
      const nextValue = paths[i+1];
      occupiedList.add(`${currentValue[0]}:${currentValue[1]}`)
      // same x
      if(currentValue[0] === nextValue[0]) {
        const direction = (currentValue[1] - nextValue[1]) > 0 ? - 1 : 1;
        const maxCount = Math.abs(currentValue[1] - nextValue[1]);
        maxY = Math.max(maxY, direction < 0 ? currentValue[1] : nextValue[1])

        let count = 0;
        while(count < maxCount) {
          const newY = currentValue[1] += direction;
          occupiedList.add(`${currentValue[0]}:${newY}`)
          count++;
        }
      } else if (currentValue[1] === nextValue[1]) {
        const direction = (currentValue[0] - nextValue[0]) > 0 ? -1 : 1;
        const maxCount = Math.abs(currentValue[0] - nextValue[0]);
        let count = 0;
        while(count < maxCount) {
          const newX = currentValue[0] += direction;
          occupiedList.add(`${newX}:${currentValue[1]}`)
          count++;
        }
      }
    }
  })

  maxY += 1;
  const spawnPos = { x:500, y:0 } as Position;
  const sandList = new Set();

  let sandPosition = spawnPos;
  let hasSettled = false;
  while(!hasSettled) {
    while(nextPossiblePosition(sandPosition, occupiedList) !== null && sandPosition.y < maxY) {
      sandPosition = nextPossiblePosition(sandPosition, occupiedList) ?? {x: 0, y:0};
    }

    occupiedList.add(`${sandPosition.x}:${sandPosition.y}`);
    sandList.add(`${sandPosition.x}:${sandPosition.y}`);
    hasSettled = (sandPosition.x === spawnPos.x) && (sandPosition.y === spawnPos.y)
    sandPosition = spawnPos;
  }
  return sandList.size;
}
