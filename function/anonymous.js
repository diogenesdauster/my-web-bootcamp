const add = function (a, b ){
    return a + b;
}

const printResult = function(a, b, expression = add){
    console.log(expression(a, b));
}

printResult(3, 4);
printResult(3, 4, add);
printResult(3, 4, function (x, y ){
    return x - y
});

printResult(3, 4, (x, y) => x * y);

const person = {
    speak: function() {
        console.log('Hii')
    }
}