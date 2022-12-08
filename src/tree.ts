export interface TreeNodeData {
    name: string;
}

export class FileData implements TreeNodeData {
    type: string;
    size: number;
    name: string;
    constructor(type: string, size: number, name: string) {
        this.type = type;
        this.size = size;
        this.name = name;
    }
}

export class TreeNode {
    parentNode: TreeNode | null = null;
    children: TreeNode[] = [];
    data: TreeNodeData | null = null;

    constructor(parentNode: TreeNode | null, data: TreeNodeData | null) {
        this.parentNode = parentNode;
        this.data = data;
    }

    addChild(childNode: TreeNode): void {
        this.children.push(childNode);
    }

    findChild(name: string): TreeNode | null {
        return this.children.find((child) => child?.data?.name === name) ?? null;
    }

    updateNodeData(data: TreeNodeData) {
        this.data = data;
    }
}