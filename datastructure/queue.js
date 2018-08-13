/**
 * 单联队列
 * 队尾添加元素，队首弹出元素
 */
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

/**
 * 循环队列
 */
class SeqQueue {
    constructor(length) {
        // 多出来的一位空着
        this.queue = new Array(length + 1);
        this.first = 0;
        this.last = 0;
        // 队列的大小
        this.size = 0;
    }
    resize(length) {
        let t = new Array(length);
        let len = this.getLength();
        for(let i = 0; i < len; i ++) {
            t[i] = this.queue[(i + this.first) % this.queue.length];
        }
        this.queue = t;
        this.first = 0;
        this.last = this.size;
    }
    getLength() { // 返回可存放数据的对列的长度
        return this.queue.length - 1;
    }
    isEmpty() {
        return this.first === this.last;
    }
    getHeader() {
        if (this.isEmpty()) {
            throw Error('Queue is empty');
        } else {
            return this.queue[this.first];
        }
    }
    addItem(item) {
        // (this.last + 1) % this.queue.length 只是为了达到最大长度时候，this.last 可以重新指回到头部
        if (this.first === (this.last + 1) % this.queue.length) { // 当尾部达到了创建的数组达到了最大长度时候扩容
            this.resize(this.getLength() * 2 + 1);
        }
        this.queue[this.last] = item;
        this.size ++;
        this.last = (this.last + 1) % this.queue.length;
    }
    deleteItem() {
        if (this.isEmpty()) {
            throw Error('Queue is empty');
        }
        let r = this.queue[this.first];
        this.queue[this.first] = null;
        this.first = (this.first + 1) % this.queue.length;
        this.size --;
        if (this.size === this.getLength() / 4 && this.getLength() / 2 !== 0) {
            this.resize(this.getLength() / 2);
        }
        return r;
    }
}