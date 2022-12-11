export class Monkey {
    items:number[] = [];
    operation = {
        operant: '',
        value: 0
    };
    test: number = 0;
    decisions: number[] = [0, 0];
    itemsInspected = 0;
    worryModifyer: boolean;
    constructor(input: string, worryModifier = false) {
        const instructions = input.split('\n');
        this.items = (instructions[1].split(':')[1]).split(',').map((v) => parseInt(v));
        const operation = instructions[2].split(':')[1].trimStart().split(' ');
        this.operation = {
            operant: operation[3],
            value: parseInt(operation[4])
        };
        this.test = parseInt(instructions[3].split(':')[1].trimStart().split(' ')[2]);
        this.decisions = [instructions[4].slice(-1), instructions[5].slice(-1)].map((v) => parseInt(v));
        this.worryModifyer = worryModifier;
    }

    calculateNewWorryLevel = (item: number, modulus?: number): number => {
        let newValue = item;
        if (this.operation.operant === '*') {
            newValue *= isNaN(this.operation.value) ? item : this.operation.value;
        } else {
            newValue += isNaN(this.operation.value) ? item : this.operation.value;
        }

        if (!this.worryModifyer) {
            return Math.floor(newValue/3);
        }
    
        return newValue % (modulus ?? 1);
    }

    processItems = (monkies: Monkey[], modulus?: number) => {
        this.items.forEach((item) => {
            const newWorryLevel = this.calculateNewWorryLevel(item, modulus);
            const isVisible = (newWorryLevel % this.test) === 0;
            const index = isVisible ? this.decisions[0] : this.decisions[1];
            monkies[index].catchItem(newWorryLevel);
        });
        this.itemsInspected += this.items.length;
        this.items = [];
    }

    catchItem = (item: number) => {
        this.items.push(item);
    }
}