// Only change code below this line

function inverseWhile() {
  var fiveNumbers = "";
  var i = 5;
  while (i >= 0) {
    if (i > 0) {
      fiveNumbers += i + ",";
      i--;
    } else {
      fiveNumbers += i;

      i--;
    }
  }
  return fiveNumbers;
}
inverseWhile();
// Only change code above this line
console.log(inverseWhile());
module.exports = inverseWhile;
