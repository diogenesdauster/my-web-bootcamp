// first way
function add1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b +c;
}

console.log(add1(),add1(3),add1(1, 2, 3),add1(0,0,0))

// second way 
function add2(a, b, c){
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;
    return a + b + c;
}

console.log(add2(),add2(3),add2(1, 2, 3),add2(0,0,0))

// third way (best way)
function add3( a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log(add3(),add3(3),add3(1, 2, 3),add3(0,0,0))