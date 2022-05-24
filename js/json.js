//javascript object notation
//JSON

const user = { id: 11, name: 'Amir Khan', job: 'actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 1500,
    products: ['laptop', 'mobile', 'pepsi'],
    onwer: {
        name: 'Alia Bhutt',
        profession: 'actor'
    },
    isExpensive: false
};

const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);

const converted = JSON.parse(shopStringified);
console.log(converted);