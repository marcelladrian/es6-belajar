//object literals
const cart = document.getElementById("cart")

//ES5

function addProduct(name, category) {
    return {name, category};
}

var getProduct = addProduct("iPhone 12", "Smartphone");
var getProduct2 = addProduct("iPhone 12 Pro", "Smartphone");

console.log(getProduct);
console.log(getProduct2);

cart.innerHTML = `Product 1: ${getProduct.name}, category ${getProduct.category}`;