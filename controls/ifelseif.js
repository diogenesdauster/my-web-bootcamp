Number.prototype.entry = function(start, end) {
    return this >= start && this <= end
}


const printResult = function (grade) {
    if(grade.entry(9, 10)){
        console.log('You are the best !!');
    }else if(grade.entry(7, 8.99)) {
        console.log('Aproved!!');
    }else if(grade.entry(4, 6.99)) {
        console.log('Study More!!');
    }else if(grade.entry(0, 3.99)) {
        console.log('Reproved!!');
    } else {
        console.log('invalid grade');
    }
    console.log('end');
}

printResult(10);
printResult(8.9);
printResult(6.55);
printResult(2.3);
printResult(-1);
printResult(11);