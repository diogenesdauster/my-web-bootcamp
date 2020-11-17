const grades = [6.7, 7, 8.9, 4, 9];

for( let i in grades){
    console.log(`grade position ${i} = ${grades[i]}`);
}


const person = {
    name: 'Dauster',
    lastname: 'Pereira',
    age: 29,
    wiegth: 84
}

for (let attr in person){
    console.log(`${attr} = ${person[attr]}`)
}