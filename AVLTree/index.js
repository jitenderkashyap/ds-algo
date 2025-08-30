import AVLTree from "./tree.js";

const avlTree = new AVLTree();
avlTree.add(10);
avlTree.add(20);
avlTree.add(30);
avlTree.add(40);
avlTree.add(50);

console.log("Searching 50", avlTree.search(50));
console.log("Searching 60", avlTree.search(60));