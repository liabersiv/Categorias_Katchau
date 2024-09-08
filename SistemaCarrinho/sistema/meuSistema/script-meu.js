const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const cartList = document.getElementById('cart-list');

// Pegar os produtos da lista de elementos
const productList = document.getElementById('product-list');
const products = productList.querySelector('.product'); // Pega TODOS os produtos da product list

// Criando um array para o carrinho
let cart = [];

// Adicionar "event listeners" para adicionar ao carrinho
products.forEach((product) => {
    const addToCartBtn = product.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', () => {
        // Pegar os detalhes dos produtos
        const productTitle = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('span').textContent;

        // Puxar os detalhes pro carrinho
        cart.push({ title: productTitle, price: productPrice });

        updateCartList();
    });
});

function updateCartList() {
    cartList.innerHTML = '';
    cart.forEach((product) => {
        const cartItem = document.createElement('li');
        cartItem
    });
}