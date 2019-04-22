/**
 * 动态规划
 * 建模
 * 最优子结构 f() = f() + f(); 边界 f(1) = 1; f(2) = 2; 状态转移公式 f(n) = f(n - 1) + f(n - 2)
 * 爬楼梯问题
 */
// 最基本的递归方式求解
function getClimbingWays1(n) {
	if (n === 1) return 1;
	if (n === 2) return 2;
	return getClimbingWays(n - 1) + getClimbingWays(n - 2); 
}

// 做了缓存处理的递归，这个也叫备忘录算法
function getClimbingWays2() {
    let temp = [];

    function getClimbingWays(n) {
        if (n === 1) return 1;
        if (n === 2) return 2;
        return getClimbingWays(n - 1) + getClimbingWays(n - 2); 
    }

    return function(n) {
        let result;
        if (temp[n]) {
            result = temp[n];
        } else {
            temp[n] = getClimbingWays(n);
            result = temp[n];
        }
        return result;
    }
}

/**
 * 上面的缓存处理办法，虽然解决了时间复杂度，但是空间复杂度依然存在
 * 动态规划能解决空间复杂度
 */

function getClimbingWays3(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let a = 1;
    let b = 2;
    let temp;

    for(let i = 3; i <= n; i ++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return temp;
} 
 

/**
 * 挖金矿
 * 
 */
F(n,w) = 0 (n<=1, w<p[0]);

F(n,w) = g[0] (n==1, w>=p[0]);

F(n,w) = F(n-1,w) (n>1, w<p[n-1])

F(n,w) = max(F(n-1,w), F(n-1,w-p[n-1])+g[n-1]) (n>1, w>=p[n-1])

let g = [400, 500, 200, 300, 350];
let p = [5, 5, 3, 4, 3];
function digGlod() {

}

/*
*装货物
有三种货物，重量分别为 1,2,3
价值分别为 3,7,12
总容量为 5 的包里最多能装多大价值的物品
*/
function knapsack(w, v, C) {
    let length = w.length
    if (length === 0) return 0
  
    // 对照表格，生成的二维数组，第一维代表物品，第二维代表背包剩余容量
    // 第二维中的元素代表背包物品总价值
    let array = new Array(length).fill(new Array(C + 1).fill(null))
  
    // 完成底部子问题的解
    for (let i = 0; i <= C; i++) {
      // 对照表格第一行， array[0] 代表物品 1
      // i 代表剩余总容量
      // 当剩余总容量大于物品 1 的重量时，记录下背包物品总价值，否则价值为 0
      array[0][i] = i >= w[0] ? v[0] : 0
    }
  
    // 自底向上开始解决子问题，从物品 2 开始
    for (let i = 1; i < length; i++) {
      for (let j = 0; j <= C; j++) {
        // 这里求解子问题，分别为不放当前物品和放当前物品
        // 先求不放当前物品的背包总价值，这里的值也就是对应表格中上一行对应的值
        array[i][j] = array[i - 1][j]
        // 判断当前剩余容量是否可以放入当前物品
        if (j >= w[i]) {
          // 可以放入的话，就比大小
          // 放入当前物品和不放入当前物品，哪个背包总价值大
          array[i][j] = Math.max(array[i][j], v[i] + array[i - 1][j - w[i]])
        }
      }
    }
    return array[length - 1][C]
  }