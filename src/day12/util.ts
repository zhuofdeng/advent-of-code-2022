import { Position } from "../util";

export const findPosition = (grid: string[][], char: string): Position => {
    let x = 0;
    let y = 0;
    grid.forEach((line, i) => {
        const index = line.indexOf(char);
        if (index > -1) {
            y = i;
            x = index;
        }
    });

    return {
        x,
        y,
    }
}

export const getHeightMap = (grid: string[][]): number[][] => {
    return grid.map((line) => line.map((v) =>{
        if (v === 'S') {
            return 'a'.charCodeAt(0) - 1;
        } else if (v === 'E') {
            return 'z'.charCodeAt(0) + 1;
        }
        return v.charCodeAt(0)
    }));
}

export const getNeighbors = (grid: number[][], currentPosition: Position): Position[] => {
    let neighbors: Position[] = [];
    // left
    if (currentPosition.x - 1 >= 0) {
        neighbors.push({x: currentPosition.x - 1, y: currentPosition.y});
    }
    // top
    if (currentPosition.y - 1 >= 0) {
        neighbors.push({x: currentPosition.x, y: currentPosition.y - 1})
    }
    // right
    if (currentPosition.x + 1 < grid[currentPosition.y].length) {
        neighbors.push({x: currentPosition.x + 1, y: currentPosition.y})
    }
    // bottom
    if (currentPosition.y + 1 < grid.length) {
        neighbors.push({x: currentPosition.x, y: currentPosition.y + 1})
    }
    return neighbors;
}

export const getShortestPathLength = (grid: string[][], startPosition: Position, endPosition: Position): number => {
    const heightMap: number[][] = getHeightMap(grid);
    const visitedMap: boolean[][] = heightMap.map((line) => line.map(() => false));
    const shortestPathMap: number[][] = heightMap.map((line) => line.map(() => Infinity));

    const processQueue: Position[] = [endPosition];
    shortestPathMap[endPosition.y][endPosition.x] = 0;
    // starting from the end to find the begining
    while(processQueue.length > 0) {
        const currentPosition = processQueue.shift();

        if (currentPosition) {
            visitedMap[currentPosition.y][currentPosition.x] = true;

            const neighbors = getNeighbors(heightMap, currentPosition);
        
            neighbors.forEach((neighbor) => {
                let currHeight = heightMap[currentPosition.y][currentPosition.x];
                let nextHeight = heightMap[neighbor.y][neighbor.x];
                if (currHeight >= nextHeight - 1) {
                    let shortestDist = shortestPathMap[neighbor.y][neighbor.x] + 1;
                    let currShortestDist = shortestPathMap[currentPosition.y][currentPosition.x];
                    shortestPathMap[currentPosition.y][currentPosition.x] = Math.min(currShortestDist, shortestDist);
                }
        
                if (!visitedMap[neighbor.y][neighbor.x] && currHeight <= nextHeight + 1) {
                    processQueue.push(neighbor);
                    visitedMap[neighbor.y][neighbor.x] = true;
                }
            });
        }
    }

    return shortestPathMap[startPosition.y][startPosition.x];
}

export const getStartingPositions = (grid: string[][]): Position[] => {
    const startingPositions: Position[] = [];
    grid.forEach((line, y) => {
        line.forEach((v, x) => {
            if (v === 'a' || v === 'S') {
                startingPositions.push({x, y});
            }
        })
    })

    return startingPositions;
}