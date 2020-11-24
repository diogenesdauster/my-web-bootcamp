// normal function 
function func1 (){}

// function with variable
const func2 = function ()  {} 

// function with array
const  array = [function (a, b) { return a + b}, func1, func2 ];
console.log(array[0](2, 3))

//function with object
const obj = {}
obj.speak = function () { return 'heyyy'}
console.log(obj.speak())

// function with atribute of function
function run(fun){
    fun()
}

run(function () { console.log('runing .....')})

// function return another function 
function add(a, b){
    return function(c){
        console.log( a + b + c)
    }
}
add(2, 3)(4);
const moreFive = add(2, 3);
moreFive(4);