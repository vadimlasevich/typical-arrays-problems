exports.min = function min (array) {
  if(array === 0){
    return 0;
  } else {
    return Math.min(...array);
  }
}

exports.max = function max (array) {
  if(array === 0){
    return 0;
  } else {
    return Math.max(...array);
  }
}

exports.avg = function avg (array) {
  if(array === 0){
    return 0;
  } else {
    return array.reduce((acc, amount) => acc + amount) / array.length;
  }
}