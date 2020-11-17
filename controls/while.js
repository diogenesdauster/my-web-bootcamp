function getIntRadomBetween(min, max){
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}


let choise = 0;

while (choise != -1){
    choise = getIntRadomBetween(-1, 10);
    console.log(`Choise is ${choise}`);
}

console.log('end');