let cart = [];

function addToCart(productName, price) {
  cart.push({ productName, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  let total = 0;
  cartItems.innerHTML = '';
  cart.forEach(item => {
    total += item.price;
    cartItems.innerHTML += `<li>${item.productName}: $${item.price.toFixed(2)}</li>`;
  });
  cartTotal.textContent = total.toFixed(2);
}

function checkout() {
  alert('Thank you for your purchase!');
  cart = [];
  updateCart();
}