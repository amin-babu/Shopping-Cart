let cart = [];

function addToCart(id, title, price, image) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, title, price, image, quantity: 1 });
    }
    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const cartCount = document.getElementById("cart-count");

    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
            <img src="${item.image}" width="50">
            <p>${item.title} - $${item.price} x ${item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartCount.textContent = cart.length;
    totalPriceElement.textContent = total.toFixed(2);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

document.getElementById("clear-cart").addEventListener("click", () => {
    cart = [];
    updateCartUI();
});