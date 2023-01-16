const products = [
    { name: 'laptop', price: 50000 },
    { name: 'shirt', price: 500 },
    { name: 'phone', price: 55000 },
    { name: 'watch', price: 5000 }
];

let totalPrice = 0;
for (const product of products) {
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice)

// new object

const cart = [
    { name: 'laptop', price: 50000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 8 },
    { name: 'phone', price: 55000, quantity: 1 },
    { name: 'watch', price: 5000, quantity: 4 }
];

let cartTotal = 0;
for (const product of cart) {
    console.log(product)
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);