// Advent of Code - Day 15 - Part One
import { manhattanDistance, parsePosition, TargetRow } from "./util";

export function part1(input: string): number {
  const sensorBeaconPair = input.split('\n').map((line) => line.split(': ').map((s) => s.slice(s.indexOf('x='))));
  const targetY = 2000000;
  let min = Infinity;
  let max = -Infinity;
  const targetRow = new Map();
  targetRow.set(targetY, {min, max});

  sensorBeaconPair.forEach((sensorBeacon) => {
    const sensor = parsePosition(sensorBeacon[0]);
    const beacon = parsePosition(sensorBeacon[1]);
    const distance = manhattanDistance(sensor, beacon);

    const yRange = [sensor.y - distance, sensor.y + distance];
    // the target row I am looking at is with in this range, lets find the x values for each
    if (targetY >= yRange[0] && targetY <= yRange[1]) {
      const yOffset = Math.abs(sensor.y - targetY);
      const xRange = [sensor.x - distance + yOffset, sensor.x + distance - yOffset];
      const row = targetRow.get(targetY);
      if (row) {
        min = Math.min(row.min, xRange[0])
        max = Math.max(row.max, xRange[1]);
      }

      targetRow.set(targetY, {min, max})
    }
  });
  
  const solution = targetRow.get(targetY)
  return solution.max - solution.min;
}
