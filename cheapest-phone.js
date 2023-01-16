const phones = [
    { name: 'Samsung', price: 50000, storage: 64 },
    { name: 'Walton', price: 40000, storage: 32 },
    { name: 'Vivo', price: 39000, storage: 32 },
    { name: 'Xiaomi', price: 25000, storage: 64 },
    { name: 'Symphony', price: 10000, storage: 64 }
];


function cheapestPhone(mobile) {
    let cheapest = phones[0];
    for (let i = 0; i < mobile.length; i++) {
        const phone = mobile[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;

        }

    }
    return cheapest;
}
const cheapPrice = cheapestPhone(phones);
console.log(cheapPrice)