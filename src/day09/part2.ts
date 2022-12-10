// Advent of Code - Day 9 - Part Two

import { verticalDistance, horizontalDistance } from "./util";

export function part2(input: string): number {
  const instructions = input.split('\n').map((v) => v.split(' '));
  const snake: Array<number[]> = [];
  const visited: Array<number[]> = [];

  for(let i = 0; i < 10; i++) {
    snake.push([0, 0]);
  }

  instructions.forEach((instruction) => {
    const direction = instruction[0];
    const steps = parseInt(instruction[1]);
    for(let i = 0; i < steps; i++) {
      switch(direction) {
        case 'L':
          snake[0][1] -= 1;
          break;
        case 'R':
          snake[0][1] += 1;
          break;
        case 'U':
          snake[0][0] += 1;
          break;
        case 'D':
          snake[0][0] -= 1;
          break;
      }

      for (let i = 1; i < snake.length; i++) {
        const yDistance = verticalDistance(snake[i-1], snake[i]);
        const xDistance = horizontalDistance(snake[i-1], snake[i]);

        if (Math.abs(xDistance) >= 2) {
          snake[i][1] += Math.sign(xDistance);
          if (Math.abs(yDistance) != 0) {
            snake[i][0] += Math.sign(yDistance);
          }
        } else if (Math.abs(yDistance) >= 2) {
          snake[i][0] += Math.sign(yDistance);
          if (Math.abs(xDistance) != 0) {
            snake[i][1] += Math.sign(xDistance);
          }
        }
      }
      const tail = snake[9];

      if(visited.findIndex((item) => item[0] === tail[0] && item[1] === tail[1]) === -1) {
        visited.push([tail[0], tail[1]]);
      }
    }
  });
  return visited.length;
}
