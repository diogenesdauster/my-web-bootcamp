const printResult = function (grade) {
    switch(Math.floor(grade)){
        case 10:
        case 9:
            console.log('You are the best !!');
            break;
        case 8: case 7:
            console.log('Aproved');
            break;
        case 6: case 5: case 4:
            console.log('Study More !!');
            break;
        case 3: case 2: case 1: case 0:
            console.log('Reproved');
            break;
        default:
            console.log('invalid grade');
    }
}

printResult(10);
printResult(8.9);
printResult(6.55);
printResult(2.3);
printResult(-1);
printResult(11);