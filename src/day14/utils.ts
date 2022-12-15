import { Position } from "../util";

export const nextPossiblePosition = (curr: Position, occupied: Set<string>): Position | null => {
	const down = { x: curr.x, y: curr.y + 1 } as Position;
	const downLeft = { x: curr.x - 1, y: curr.y + 1} as Position;
	const downRight = { x: curr.x + 1, y: curr.y + 1} as Position;
	if(!occupied.has(`${down.x}:${down.y}`))
		return down;
	if(!occupied.has(`${downLeft.x}:${downLeft.y}`))
		return downLeft;
	if(!occupied.has(`${downRight.x}:${downRight.y}`))
		return downRight;
	return null;
};
