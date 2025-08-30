import Node from "./node.js";

export default class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = new Node(value);
        if (this.root == null) {
            this.root = node;
        } else {
            this.add(this.root, node);
        }
    }

    add(root, node) {
        if (node.value < root.value) {
            if (root.left == null) {
                root.left = node;
            } else {
                this.add(root.left, node);
            }
        } else {
            if (root.right == null) {
                root.right = node;
            } else {
                this.add(root.right, node);
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left);
        }
    }

    remove(value){
        if(this.root==null){ return; }
        this.root=this.delete(this.root,value);
    }

    delete(root,value){
        // first search values
        if(value<root.value){
            root.left= this.delete(root.left,value); // value assignment
        }else if(value>root.value){
            root.right= this.delete(root.right,value); // value assignment
        }else{
            // here we got value
            if(!root.left && !root.right){
                return null;
            }

            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }

            root.value=this.min(root.right);
            root.right=this.delete(root.right,root.value);

        }
        return root;
    }

    print() {
        console.log(this.root);
    }
}