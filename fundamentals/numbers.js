// how to declare
const weight1 = 1.0;
const weight2 = Number('2.0');

console.log(weight1, weight2);
 
// when you put 1.0 the zero is ignore
console.log(Number.isInteger(weight1));
console.log(Number.isInteger(weight2));

const grade1 = 9.871
const grade2 = 6.871

const total = grade1 * weight1 + grade2 * weight2;
const averageGrade = total / (weight1 + weight2);

console.log(averageGrade.toFixed(2)) // change the float point, it does not change the value
console.log(averageGrade.toString()) // convert the average grande in string
console.log(averageGrade.toString(2)) // convert the average grande in binary
console.log( typeof averageGrade);
console.log( typeof Number);

//troubleshooting problems
console.log( 7 / 0 ); // Infinity type
console.log("10" / 2);// Number
console.log("3" + 2);// String
console.log("10,2" / 2);// NaN (Not a Number)
console.log("Show!" * 2);// NaN
console.log(0.1 + 0.7 );// it is not precise
// console.log(10.toString() ); error
console.log((10.345).toFixed(2)) // it is ok between paranthesis

// object Math functionalities
const radius = 5.6;
const area = Math.PI * Math.pow(radius, 2); // calc the circle area

console.log(area);
console.log(typeof Math);