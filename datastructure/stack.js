/**
 * 栈的特点是先进后出
 */
class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        this.stack.pop(); // 实现先进后出
    }
    peek() { // 查看栈最顶部（最后入栈）的元素
        return this.stack[this.getSize() - 1];
    }
    getSize() {
        return this.stack.length;
    }
    isEmpty() {
        return this.getSize() === 0;
    }
}

/**
 * 验证一个字符串中的各类括号是否能正确匹配
 * 验证通过返回 true 不通过返回 false
 */
let isValid = function(s) {
    let map = {
        '(': -1,
        ')': 1,
        '[': -2,
        ']': 2,
        '{': -3,
        '}': 3
    };
    let stack = new Stack();
    for(let i = 0, len = s.length; i < len; i ++) {
        let sItem = s[i];
        let mapItem = map[sItem];
        if (mapItem < 0) {
            stack.push(mapItem);
        } else {
            let newItem = stack.pop();
            if (newItem !== -mapItem) return false;
        }
    }
    if (stack.getSize() !== 0) return false;
    return true;
}

/**
 * 上面的例子使用了自定义的栈这一数据结构，下面为了简洁直接使用数组实现
 */
let isValid = function(s) {
    let map = {
        '(': -1,
        ')': 1,
        '[': -2,
        ']': 2,
        '{': -3,
        '}': 3
    };
    let stack = [];
    for(let i = 0, len = s.length; i < len; i ++) {
        let sItem = s[i];
        let mapItem = map[sItem];
        if (mapItem < 0) {
            stack.push(mapItem);
        } else {
            let newItem = stack.pop();
            if (newItem !== -mapItem) return false;
        }
    }
    if (stack.length !== 0) return false;
    return true;
}