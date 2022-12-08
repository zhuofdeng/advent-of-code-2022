// Advent of Code - Day 7 - Part One

import { FileData, TreeNode } from "../tree";

const calculateDirSize = (treeNode: TreeNode) => {
  const children = treeNode.children;
  let size = 0;
  children.forEach((child) => {
    const childData: FileData | null = child.data as FileData;
    if (childData.type === 'dir') {
      calculateDirSize(child);
    }

    const data: FileData | null = child.data as FileData;
    size += data.size;
  })
  const fileData = treeNode.data as FileData
  fileData.size = size;
  treeNode.updateNodeData(fileData)
}

const sumDirs = (treeNode: TreeNode, maxThreashold = 100000) => {
  const children = treeNode.children;
  let total = 0;
  children.forEach((child) => {
    const childData: FileData | null = child.data as FileData;
    if (childData.type === 'dir') {
      total += sumDirs(child);
      if (childData.size <= maxThreashold) {
        total += childData.size;
      }
    }
  });

  return total;
}

export function part1(input: string): number {
  const commands = input.split('\n');
  const treeHead = new TreeNode(null, new FileData("dir", 0, 'root'));
  let currentNode: TreeNode | null = treeHead;
  let total = 0;
  for(let i = 1; i < commands.length; i++) {
    const command = commands[i].split(' ')
    if (command.includes('$')) {
      // list contents in this folder
      if (command.includes('ls')) {
        let newNode;
        while(i < commands.length - 1) {
          i++;
          if (i < commands.length && commands[i].includes('$')) {
            i--;
            break;
          }
          const lsCommands = commands[i].split(' ');
          if (lsCommands[0] === 'dir') {
            const data = new FileData('dir', 0, lsCommands[1])
            newNode = new TreeNode(currentNode, data);
          } else {
            const size = parseInt(lsCommands[0]);
            const data = new FileData('file', parseInt(lsCommands[0]), lsCommands[1])
            newNode = new TreeNode(currentNode, data);
          }

          if (newNode && currentNode) {
            currentNode.addChild(newNode)
          }
        }
      } else if (command.includes('cd')) {
        // navigating into another folder
        // moving up.
        if (command[2] === '..' && currentNode) {
          currentNode = currentNode.parentNode;
        } else {
          const childNode: TreeNode | undefined | null = currentNode?.findChild(command[2])
          if (childNode) {
            currentNode = childNode;
          }
        }
      }
    }
  }

  calculateDirSize(treeHead)
  total = sumDirs(treeHead);
  return total;
}
