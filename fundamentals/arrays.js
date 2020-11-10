const values = [7.8,7.9,4.3,3.5];

console.log(values[0], values[3]);
console.log(values[4]) // undefined

values[4] = 10;
console.log(values);
console.log(values.length);

values.push({id: 3}, false, null, 'teste');
console.log(values);

console.log(values.pop()) // remove the last position
delete values[0]
console.log(values)

console.log(typeof values); // type object