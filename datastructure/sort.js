let array0 = [65, 23, 87, 12, 0, 7, 96, 33];
let length = array0.length;
/**插入排序 --begin*/

// 升序排列
for (let i = 1; i < length + 1; i ++) {
  let pos = i;
  // 小范围的先排好序
  while (pos > 0 && (array0[pos - 1] > array0[pos])) {
    let temp = array0[pos];
    array0[pos] = array0[pos - 1];
    array0[pos - 1] = temp;
    pos --;
  }
}
console.log('升序 =>', array0);

// 降序排列
for (let i = 1; i < length + 1; i ++) {
  let pos = i;
  // 小范围的先排好序
  while (pos > 0 && (array0[pos - 1] < array0[pos])) {
    let temp = array0[pos];
    array0[pos] = array0[pos - 1];
    array0[pos - 1] = temp;
    pos --;
  }
}
console.log('降序 =>', array0);
/**插入排序 --end*/

/**选择排序 --begin 先找到要放置的位置，然后在寻找未排列的最小或最大的值*/
// 升序排列
for (let i = 0; i < length - 1; i ++) {
  // 每一轮比较都把最小的一个值放到每轮比较开始的位置
  let pos = i; // 每轮开始的位置
  for (let j = i + 1; j < length; j ++) {
    if (array0[pos] > array0[j]) {
      pos = j;
    }
  }
  // 把找到的最小的一位换位置
  let temp = array0[i];
  array0[i] = array0[pos];
  array0[pos] = temp;
}
console.log('升序 =>', array0);

// 降序排列
for (let i = 0; i < length - 1; i ++) {
  // 每一轮比较都把最小的一个值放到每轮比较开始的位置
  let pos = i; // 每轮开始的位置
  for (let j = i + 1; j < length; j ++) {
    if (array0[pos] < array0[j]) {
      pos = j;
    }
  }
  // 把找到的最小的一位换位置
  let temp = array0[i];
  array0[i] = array0[pos];
  array0[pos] = temp;
}
console.log('降序 =>', array0);
/**选择排序 --end*/

/**冒泡排序 --begin */

// 升序排列
for (let i = 0; i < length; i ++) {
  for (let j = 0; j < length - i -1; j ++) { //length - i -1 保证首轮能对比到最后一位
    if (array0[j] > array0[j + 1]) {
      let temp = array0[j];
      array0[j] = array0[j + 1];
      array0[j + 1] = temp;
    }
  }
}
console.log('升序 =>', array0);

// 降序排列
for (let i = 0; i < length; i ++) {
  for (let j = 0; j < length - i -1; j ++) {
    if (array0[j] < array0[j + 1]) {
      let temp = array0[j];
      array0[j] = array0[j + 1];
      array0[j + 1] = temp;
    }
  }
}
console.log('降序 =>', array0);
/**冒泡排序 --end */