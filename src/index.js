
exports.min = function min (array) {
  // let sorted = array.sort();
  // array.sort((a, b) => a - b);
  // array.splice(0, 1);
  // if (array === [ ]) return 0;
  // let result = array[0];
  // for (let i = 0; i < array.length; i++) {
  if (array && array.length !== 0) {
    let result = Math.min(...array);
    return result;
  }
  else {
    return 0;
  }
}

exports.max = function max (array) {
  // let result = [];
  // for (let i=0; i < array.length; i++){
  if (array && array.length !== 0) {
    let result = Math.max(...array);
    return result;
  }
  else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array && array.length !== 0) {
    let result = array.reduce((acc, item) => acc + item, 0);
    let total = result / array.length;
    return total;
    // let result = array.reduce((acc, item) => (acc + item) / item, 1);
    // let total = array.reduce();
    // return total;
  }
  else {
    return 0;
  }
}
