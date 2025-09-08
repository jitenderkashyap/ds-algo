import Node from "./node.js";

export default class Tree {
    constructor() {
        this.root = null;
    }

    #height(node) {
        if (!node) {
            return 0;
        }
        return node.height;
    }

    insert(value) {
        let node = new Node(value);
        if (this.root == null) {
            this.root = node;
        } else {
            this.root = this.#add(this.root, node);
        }
    }

    #add(root, node) {
        if (node.value < root.value) {
            if (root.left == null) {
                root.left = node;
            } else {
                this.#add(root.left, node);
            }
        } else {
            if (root.right == null) {
                root.right = node;
            } else {
                this.#add(root.right, node);
            }
        }
        root.height = 1 + Math.max(this.#height(root.left), this.#height(root.right));
        return root;
    }

    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    max(root) {
        if (!root.right) {
            return root.value;
        }
        return this.max(root.right);
    }

    remove(value) {
        if (this.root == null) { return; }
        this.root = this.delete(this.root, value);
    }

    delete(root, value) {
        // first search values
        if (value < root.value) {
            root.left = this.delete(root.left, value); // value assignment
        } else if (value > root.value) {
            root.right = this.delete(root.right, value); // value assignment
        } else {
            // here we got value
            if (!root.left && !root.right) {
                return null;
            }

            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }

            root.value = this.min(root.right);
            root.right = this.delete(root.right, root.value);

        }
        return root;
    }

    size() {
        if (!this.root) { return 0; }
        return 1 + this.#getSize(this.root.left) + this.#getSize(this.root.right);
    }
    #getSize(root) {
        if (!root) { return 0; } // base case
        return 1 + this.#getSize(root.left) + this.#getSize(root.right);
    }

    size2() {
        if (!this.root) { return 0; }
        let queue = [this.root];
        let count = 0;
        while (queue.length > 0) {
            let node = queue.shift();
            count++;
            if (node.left) { queue.push(node.left); }
            if (node.right) { queue.push(node.right); }
        }
        return count;
    }

    sum() {
        if (!this.root) { return 0; }
        return this.root.value + this.#getSum(this.root.left) + this.#getSum(this.root.right);
    }
    #getSum(root) {
        if (!root) { return 0; }
        return root.value + this.#getSum(root.left) + this.#getSum(root.right);
    }

    sum2() {
        if (!this.root) { return 0; }
        let sum = 0;
        let queue = [this.root];
        while (queue.length > 0) {
            let current = queue.shift();
            sum += current.value;
            if (current.left) { queue.push(current.left); }
            if (current.right) { queue.push(current.right); }
        }
        return sum;
    }

    levelOrderTravesal() {
        if (!this.root) { return null; }
        let arr = [];
        let queue = [this.root];
        while (queue.length > 0) {
            let current = queue.shift();
            arr.push(current.value);
            if (current.left) { queue.push(current.left); }
            if (current.right) { queue.push(current.right); }
        }
        return arr;
    }

    spiralLevelOrderTraversal(root) {
        if (!root) return [];

        const result = [];
        const queue = [];
        let leftToRight = true;

        queue.push(root);

        while (queue.length > 0) {
            const levelSize = queue.length;
            const level = new Array(levelSize);

            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();

                // Decide index based on direction
                const index = leftToRight ? i : levelSize - 1 - i;
                level[index] = node.data;

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            // Add current level to result
            result.push(...level);

            // Toggle direction
            leftToRight = !leftToRight;
        }

        return result;
    }

    getLeafNodeCount() {
        if (this.root == null) { return 1; }
        return this.#getLeafNode(this.root);
    }

    #getLeafNode(root) {
        if (!root) { return 0; }
        if (!root.left && !root.right) {
            return 1;
        }
        return this.#getLeafNode(root.left) + this.#getLeafNode(root.right);
    }
}