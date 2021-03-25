debugger;
let binarySum = function (a, b) {
  let c = [],
    sum = 0,
    key = 0,
    i = a.length - 1,
    j = b.length - 1;
  while (i >= 0 || j >= 0) {
    if (i != 0 && j == 0) {
      j++;
      b.unshift(0);
    } else if (j != 0 && i == 0) {
      i++;
      a.unshift(0);
    }
    sum = a[i] + b[j] + key;
    c.unshift(sum % 2);
    if (sum == 3 || sum == 1) {
      sum--;
      key = sum / 2;
    } else {
      key = sum / 2;
    }
    i--;
    j--;
  }
  if (key != 0) {
    c.unshift(key);
    return c;
  } else {
    return c;
  }
};
