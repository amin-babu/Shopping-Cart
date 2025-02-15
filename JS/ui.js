// Show or hide the cart when the cart icon is clicked
function toggleCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.style.display = cartContainer.style.display === "block" ? "none" : "block";
}

// Close the cart when the close button (X) is clicked
document.getElementById("close-cart").addEventListener("click", () => {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.style.display = "none";
});

// Checkout button functionality
document.getElementById("checkout").addEventListener("click", () => {
  if (cart.length === 0) {
      alert("Your cart is empty!");
  } else {
      alert("Proceeding to checkout!");
  }
});
