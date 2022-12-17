// Advent of Code - Day 15 - Part Two

import { Position } from "../util";
import { manhattanDistance, parsePosition } from "./util";

export function part2(input: string): number {
  const sensorBeaconPair = input.split('\n').map((line) => line.split(': ').map((s) => s.slice(s.indexOf('x='))));
  const maxY = 4000000;
  const maxX = 4000000;
  let min = Infinity;
  let max = -Infinity;
  const targetRow = new Map();
  const potentialSolutions: Position[]= [];
  sensorBeaconPair.forEach((sensorBeacon) => {
    const sensor = parsePosition(sensorBeacon[0]);
    const beacon = parsePosition(sensorBeacon[1]);
    const distance = manhattanDistance(sensor, beacon);

    const yRange = [sensor.y - distance, sensor.y + distance];

    debugger
    // the target row I am looking at is with in this range, lets find the x values for each
    if (yRange[1] <= maxY || (maxY >= yRange[0] && maxY <= yRange[1])) {
      const upper = Math.min(maxY, yRange[1]);
      for(let targetY = Math.max(0, yRange[0]); targetY <= upper; targetY++) {
        const yOffset = Math.abs(sensor.y - targetY);
        const xRange = [sensor.x - distance + yOffset, sensor.x + distance - yOffset];
        const row = targetRow.get(targetY);
        if (row) {
          if (row.max < xRange[0]) {
            debugger
            potentialSolutions.push({x: row.max + 1, y: targetY});
            break;
          }
          min = Math.min(row.min, xRange[0])
          max = Math.min(Math.max(row.max, xRange[1]), maxX);
        } else {
          min = Math.min(min, xRange[0])
          max = Math.min(Math.max(max, xRange[1]), maxX);
        }

        targetRow.set(targetY, {min, max})
      }
    }
  });
  
  console.log(potentialSolutions);
  const solution = potentialSolutions[0]
  return 0;
}
