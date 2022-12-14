export const splitIntoPairsArray = (input: string) => {
   return input.split('\n\n').map((pair) => pair.split('\n'));
}

const comparePair = (left: string | any[], right: string | any[]): boolean | null => {
    const maxIndex = Math.max(left.length, right.length);
    
    for(let index = 0; index < maxIndex; index++) {
        const leftValue = left[index]
        const rightValue = right[index];
        const leftType = typeof leftValue;
        const rightType = typeof rightValue;
        // ran out of items to compare, time to bail.
        if (leftValue === undefined) { // left side ran out, it is true;
            return true;
        } else if (rightValue === undefined) { // right side ran out, left is larger.
            return false;
        }

        if(leftType === 'number' && rightType === 'number') { // both are number, just compare left against right
            if (leftValue === rightValue) {
                continue;
            }
            return leftValue < rightValue;
        }
        
        const newLeft = leftType === 'number' ? [leftValue] : leftValue;
        const newRight = rightType === 'number' ? [rightValue] : rightValue;
        const pairInOrder = comparePair(newLeft, newRight)
        if (pairInOrder !== null) {
            return pairInOrder;
        }
    }

    // Left side has less items, it wins
    // otherwise, it is undetermined... move on.
    return left.length < right.length ? true : null
}

export const pairIsInOrder = (pair: string[]): boolean => {
    const left = JSON.parse(pair[0]);
    const right = JSON.parse(pair[1]);

    return comparePair(left, right) ?? false;
}