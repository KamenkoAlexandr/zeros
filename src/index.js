module.exports = function getZerosCount(number) {
  // your implementation
    var k = 0;
    while ( number >= 5 ) {
        k += Math.trunc(number / 5);
        number = Math.trunc(number / 5);
    }
    return k;
}