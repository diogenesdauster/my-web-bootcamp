//arithmetic operator
const [a, b, c, d] = [3, 5, 1, 15];

const add = a + b + c + d;
const minus = d - b;
const mutiply = a * b;
const divide = d / a;
const mod = a % 2;

console.log(add, minus, mutiply, divide, mod);

//relational operator

console.log('01)', '1' == 1);
console.log('02)', '1' === 1);
console.log('03)', '3' != 3);
console.log('04)', '3' !== 3);

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)',  3>= 2);

const  d1 = new Date(0);
const  d2 = new Date(0);

console.log('09)', d1 === d2);
console.log('10)', d1 == d2);
console.log('11)',d1.getTime() == d2.getTime());

console.log('12)', undefined == null);
console.log('13)', undefined === null); 


//logical

function gods(job1, job2){
    const buyScream = job1 || job2;
    const  buyTv50 = job1 && job2;
    //const buyTv32 = !!(job1 ^ job2); 
    const buyTv32 = job1 != job2;
    const keepHealth = !buyScream;
    return { buyScream, buyTv50, buyTv32, keepHealth}
}

console.log(gods(true, true));
console.log(gods(true, false));
console.log(gods(false,true));
console.log(gods(false,false));