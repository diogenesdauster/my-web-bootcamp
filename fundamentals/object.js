const prod1 = {};
prod1.name = 'MacBook Pro 13';
prod1.price = 7.000;
prod1['Discount'] = 500;

console.log(prod1);

const prod2 = {
    name: 'Apple Watch',
    price: 79.00,
    obj: {
        etc1: 1,
        obj:{
            etc1: 2
        }
    }
};

console.log(prod2);

console.log(typeof prod2);