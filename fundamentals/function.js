console.log(typeof Object)

class Product {}
console.log(typeof Product);

// function without return
function printPlus(a , b){
    console.log(a + b);
}

printPlus(2, 4);
printPlus(2);
printPlus(2,3,5,6,7,8);
printPlus();

// function with return
function plus(a , b = 1){
    return a + b;
}

console.log(plus(1, 4));
console.log(plus(6));
console.log(plus(null));

// function in a variable
const printPlus2 = function(a , b){
    console.log(a + b);
}

printPlus2(2, 3);

// arrow function
const plus2 = (a,b) =>{
    return a + b;
}

console.log(plus2(2,3));

// arroe function without return world
const minus = (a,b) => a - b;

console.log(minus(2,3));