function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartUI();


function addToCart(id, title, price, image) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, title, price, image, quantity: 1 });
    }
    saveCart();
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
            <div id="main">
                <img src="${item.image}" width="50">
                <p>${item.title} - $${item.price} x ${item.quantity}</p>
                <button id="extra" onclick="removeFromCart(${item.id})">Remove</button>
                <div class="quantity-controls">
                    <button onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})">+</button>
                </div>  
            </div>
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


// Increase quantity
function increaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
    }
    updateCartUI();
}

// Decrease quantity
function decreaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
    }
    updateCartUI();
}



document.getElementById("clear-cart").addEventListener("click", () => {
    cart = [];
    saveCart();
    updateCartUI();
});
