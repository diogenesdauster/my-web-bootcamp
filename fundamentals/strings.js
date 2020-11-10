const school = "Cod3r";

// return a letter of the string postion 
console.log(school.charAt(4));
console.log(school.charAt(5)); // return nothing if it is bigger then length

// return a code of unicode table
console.log(school.charCodeAt(4));

// search on string and return the value if it exists 
console.log(school.indexOf("3")); 

// return a piece of the string
console.log(school.substring(0, 3)); 

// merge string 
console.log('School '.concat(school).concat('!')); 
console.log('School ' + school + '!'); 

// find and replace a string inside the string
console.log(school.replace('3','e')); 

// return a array of string on base of delimitator
console.log('Diógenes,Dauster,Lucas,Pereira'.split(","))

console.log(typeof school);

// String Template

const name = 'Dauster';
const concat = 'Hello '+ name + '!';
const template = `
Hello
${name}!`

console.log(concat, template);
// expresion
console.log(`1 + 1 = ${1 + 1}`);

const up = s => s.toUpperCase();
console.log(`Yehh..${up('be careful !!!')}`);