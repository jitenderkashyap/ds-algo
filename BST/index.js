import Tree from "./tree.js";

let x = new Tree();
x.insert(8);
x.insert(3);
x.insert(10);
x.insert(1);
x.insert(6);
x.insert(14);
x.insert(4);
x.insert(7);

// x.remove(8);

x.print();

console.log("level order travesal",x.levelOrderTravesal());
console.log("min value of tree",x.min(x.root));
console.log("max value of tree",x.max(x.root));
console.log("size of tree",x.size());
console.log("size of tree2",x.size2());
console.log("sum of tree",x.sum());
console.log("sum of tree2",x.sum2());