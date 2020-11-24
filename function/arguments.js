function add (){
    let  total = 0;
    for(i in arguments){
        total+= arguments[i];
    }
    return total;
}

console.log(add());
console.log(add(1));
console.log(add(1.1, 2.2, 3.3));
console.log(add(1.1, 2.2, 'teste'));
console.log(add('a', 'b', 'c'));