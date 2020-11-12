const person = {
    name: 'Ana',
    age: 26,
    address: {
        street: 'test 1',
        number: 1000
    }
}

const {name, age} = person;
console.log(name, age);

const {name: i , lastname} = person;
console.log(i, lastname);

const {name: i1 , lastname: i2 = 'teste'} = person;
console.log(i1, i2);

const {age: t , address: { street}} = person

console.log(t, street)

const [a] = [10];
console.log(a);

const [n1, ,n3, ,n5, n6 = 0] = [10, 7 , 9 , 8]
console.log(n1, n3,n5,n6)

 const [, [, nota]] = [[,8, 8],[9, 6, 8]];
 console.log(nota)


 function rand ( {min = 0, max = 100} ) {
     const value = Math.random() * (max - min) + min;
     return Math.floor(value);
 }

 const obj = {max: 50, min:40}
 console.log(rand(obj))
 console.log(rand({min: 955}))
 console.log(rand({}))
 console.log(rand())


 function rand2([min = 0, max= 1000]) {
     if(min > max) [min, max] = [max, min]
     const value = Math.random() * (max - min) + min;
     return Math.floor(value);
 }

 console.log(rand2([50, 40]));
 console.log(rand2([992]));
 console.log(rand2([,10]));
 console.log(rand2([]));
 //console.log(rand2()); Error