function copyDeep(source) {
  let newObj;
  if (Object.prototype.toString.call(source) === "[object Array]") newObj = [];
  else if (Object.prototype.toString.call(source) === "[object Object]") newObj = {};
  else return source;

  for (let key in source) {
    let value = source[key];
    if (typeof value === 'object') {
      newObj[key] = copyDeep(value);
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
}

var obj = {
  a0: '000',
  a1: [1, 2, 3,],
  b1: {
    child: '111'
  },
  b2: {
    child: [{name: '220'}, {name: '221'},]
  },
  c1: () => {
    console.log('001');
  },
  c2: function() {
    console.log('003');
  },
  d: Symbol('002'),
  e: undefined,
  f: null,
  g: '',
  h: NaN,
};