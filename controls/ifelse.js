const printResult = function(grade) {
    if(grade >=7 ){
        console.log('Aproved!!');
    }else{
        console.log(' not Aproved!!');
    }
}

printResult(10);
printResult(4);
printResult('Hay'); // return false