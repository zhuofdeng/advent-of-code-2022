import { Position } from "../util";
export type TargetRow = {
    min: number,
    max: number,
    targetY: number,
}

export const parsePosition = (position: string): Position => {
    const coord = position.split(', ');
    const x = parseInt(coord[0].slice(coord[0].indexOf('x=') + 2));
    const y = parseInt(coord[1].slice(coord[1].indexOf('y=') + 2));
    return {x, y};
}

export const manhattanDistance = (point1: Position, point2: Position): number => {
    return Math.abs(point1.x - point2.x) + Math.abs(point1.y - point2.y);
}