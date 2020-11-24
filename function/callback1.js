const brands = ["Mercedes", "Audi", "BMW"];

function print(name, index){
    console.log(`${index + 1}. ${name}`);
}

brands.forEach(print);
brands.forEach(brand => console.log(brand))