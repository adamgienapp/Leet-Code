var reverse = function(x) {
  const result = x > 0 ? Number(x.toString().split('').reverse().join('')) :
      Number(x.toString().slice(1).split('').reverse().join('')) * -1;
  return result > 0 ? result > Math.pow(2, 31) - 1 ? 0 : result : result < Math.pow(-2, 31) ? 0 : result;
};
