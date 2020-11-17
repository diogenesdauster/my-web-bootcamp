const numbers = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];

for(let x in numbers){
    if(x == 5) {
        break
    }
    console.log(`${x} = ${numbers[x]}`)
}

for(let x in numbers){
    if(x == 5) {
        continue
    }
    console.log(`${x} = ${numbers[x]}`)
}

external: for (a in numbers){
    for (b in numbers){
        if( a == 2 && b == 3) {
            break external
        }
        console.log(`Par = ${a},${b}`);
    }
}