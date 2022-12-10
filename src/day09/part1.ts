// Advent of Code - Day 9 - Part One

import { headNextToTail, verticalDistance, horizontalDistance } from "./util";

export function part1(input: string): number {
  const instructions = input.split('\n').map((v) => v.split(' '));
  const head = [0, 0];
  const tail = [0, 0];
  const visited: Array<number[]> = [];
  instructions.forEach((instruction) => {
    const direction = instruction[0];
    const steps = parseInt(instruction[1]);
    for(let i = 0; i < steps; i++) {
      let xDistance;
      let yDistance;
      switch(direction) {
        case 'L':
          head[1] -= 1;
          break;
        case 'R':
          head[1] += 1;
          break;
        case 'U':
          head[0] += 1;
          break;
        case 'D':
          head[0] -= 1;
          break;
      }

      yDistance = verticalDistance(head, tail);
      xDistance = horizontalDistance(head, tail);
      if (Math.abs(xDistance) >= 2) {
        tail[1] += Math.sign(xDistance);
        if (Math.abs(yDistance) != 0) {
          tail[0] += Math.sign(yDistance);
        }
      } else if (Math.abs(yDistance) >= 2) {
        tail[0] += Math.sign(yDistance);
        if (Math.abs(xDistance) != 0) {
          tail[1] += Math.sign(xDistance);
        }
      }
      if(visited.findIndex((item) => item[0] === tail[0] && item[1] === tail[1]) === -1) {
        visited.push([tail[0], tail[1]]);
      }
    }
  })
  return visited.length;
}
