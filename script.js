let cart = [];
let total = 0;

function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  total += itemPrice;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  const totalElement = document.getElementById('total');

  cartList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });

  totalElement.textContent = total.toFixed(2);
}
function checkout() {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
  
    let message = "Thank you for your order!\n\n";
    cart.forEach(item => {
      message += `• ${item.name} - $${item.price.toFixed(2)}\n`;
    });
    message += `\nTotal: $${total.toFixed(2)}`;
  
    alert(message);
  
    // Clear cart
    cart = [];
    total = 0;
    updateCart();
  }
  function filterMenu() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const items = document.querySelectorAll(".menu-items .item");
  
    items.forEach(item => {
      const title = item.querySelector("h3").textContent.toLowerCase();
      if (title.includes(input)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
  
  
