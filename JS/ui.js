function toggleCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.style.display = cartContainer.style.display === "block" ? "none" : "block";
}

document.getElementById("checkout").addEventListener("click", () => {
  if (cart.length === 0) {
      alert("Your cart is empty!");
  } else {
      alert("Proceeding to checkout!");
  }
});