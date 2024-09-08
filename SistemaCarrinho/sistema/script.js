// Get the cart button, sidebar, and list elements
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const cartList = document.getElementById('cart-list');

// Get the product list elements
const productList = document.getElementById('product-list');
const products = productList.querySelectorAll('.product');

// Create an empty cart array
let cart = [];

// Add event listeners to the add-to-cart buttons
products.forEach((product) => {
  const addToCartBtn = product.querySelector('.add-to-cart');
  addToCartBtn.addEventListener('click', () => {
    // Get the product details
    const productTitle = product.querySelector('h3').textContent;
    const productPrice = 10.99; // assume a fixed price for now

    // Add the product to the cart
    cart.push({ title: productTitle, price: productPrice });

    // Update the cart list
    updateCartList();
  });
});

// Update the cart list function
function updateCartList() {
  cartList.innerHTML = '';
  cart.forEach((product) => {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${product.title} - $${product.price}`;
    cartList.appendChild(cartItem);
  });
}

// Toggle the cart sidebar on click
cartBtn.addEventListener('click', () => {
  cartSidebar.classList.toggle('active');
});