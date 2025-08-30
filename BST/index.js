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

x.remove(8);

x.print();

console.log(x.min(x.root));