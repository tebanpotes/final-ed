
const treeNode = require('./node');
const prompt = require('prompt-sync')();


var tree = new treeNode(11);

tree.Insert(2);
tree.Insert(5);
tree.Insert(8);
tree.Insert(6);
tree.Insert(8);
tree.Insert(15);
tree.Insert(17);
tree.Insert(18);



// tree.InOrder();

console.log("");

console.log(tree.Search(19));

console.log(tree.InOrder())