// Only change code below this line
function myDoWhile() {
    var i = 0;
    var myNumbers = "";
    while(i<10){
        if(i < 9){
        myNumbers += i + ", ";
        i++;
    }else{
        myNumbers += i;
        i++;
    }
    }
    return myNumbers;
}
myDoWhile();
// Only change code above this line

module.exports = myDoWhile;