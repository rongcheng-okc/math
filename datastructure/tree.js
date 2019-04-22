class Queue {
    constructor() {
        this.queue = [];
    }
    addItem(item) {
        this.queue.push(item);
    }
    deleteItem() { // 有返回被删除的元素
        return this.queue.shift();
    }
    getHeader() {
        return this.queue[0];
    }
    getLength() {
        return this.queue.length;
    }
    isEmpty() {
        return this.getLength() === 0;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    getSize() {
        return this.size;
    }
    isEmty() {
        return this.size === 0;
    }
    addNode(v) {
        let node = this._addChild(this.root, v);
        if (!this.root) {
            this.root = node;
        }
        return node;
    }
    _addChild(node, v) {
        if (!node) {
            this.size++;
            return new Node(v);
        }
        if (node.value > v) {
            node.left = this._addChild(node.left, v);
        } else if (node.value < v) {
            node.right = this._addChild(node.right, v);
        }
        return node;
    }
    preTraversal() {
        this._pre(this.root);
    }
    _pre(node) {
        if (node) {
            console.log(node.value);
            this._pre(node.left);
            this._pre(node.right);
        }
    }
    midTraversal() {
        this._mid(this.root);
    }
    _mid(node) {
        if (node) {
            this._mid(node.left);
            console.log(node.value);
            this._mid(node.right);
        }
    }
    backTraversal() {
        this._back(this.root)
    }
    _back(node) {
        if (node) {
            this._back(node.left)
            this._back(node.right)
            console.log(node.value)
        }
    }
    breadthTraversal() {
        if (!this.root) return null;
        let q = new Queue();
        q.addItem(this.root);
        while (!q.isEmpty()) {
            let n = q.deleteItem();
            console.log(n.value);
            if (n.left) q.addItem(n.left);
            if (n.right) q.addItem(n.right);
        }
    }
    getMin() {
        return this._getMin(this.root).value;
    }
    _getMin(node) {
        if (!node.left) return node;
        return this._getMin(node.left);
    }
    getMax() {
        return this._getMax(this.root).value;
    }
    _getMax(node) {
        if (!node.right) return node;
        return this._getMin(node.right);
    }

}