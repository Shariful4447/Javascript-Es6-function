
//another option we can set value in parameter inside function
function add(num1, num2 =10 ){
    num2= num2 || 0;//one option if we did not get value of two parameter

    var total=num1+num2;
    return total;
}

console.log(add(20,15)); //if we set value then it will call this value