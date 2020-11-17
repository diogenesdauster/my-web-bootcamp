function getIntRadomBetween(min, max){
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}


let choise = -1;

do {
    choise = getIntRadomBetween(-1, 10);
    console.log(`Choise is ${choise}`);
}while (choise != -1)

console.log('end');