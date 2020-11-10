let value // it is not initalizer
console.log(value); 

value = null; // without value
console.log(value)
//console.log(value.toString()) // Error not defained

const product = {};
console.log(product.price);
console.log(product);

product.price = 4.8;
console.log(product);

product.price = undefined;
console.log(!!product.price);
// delete product.price
console.log(product);

product.price = null;
console.log(!!product.price);
console.log(product);