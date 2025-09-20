// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}
// Respect reduced motion (no animations here yet, but this is where we gate them)
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { /* no-op */}

//Order Summary 
// Sample order data
const orderItems = [
  { name: 'Product A', price: 12.99, quantity: 1 },
  { name: 'Product B', price: 5.50, quantity: 2 },
  { name: 'Product C', price: 20.00, quantity: 1 }
];

function renderOrderSummary() {
  const itemList = document.getElementById('cart-items');
  const orderTotalSpan = document.getElementById('order-total');
  let total = 0;

  // Clear existing items
  itemList.innerHTML = '';

  // Add each item to the list
  orderItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`;
    itemList.appendChild(listItem);
    total += item.price * item.quantity;
  });

  // Update the total
  orderTotalSpan.textContent = `$${total.toFixed(2)}`;
}

// Call the function to render the summary when the page loads
document.addEventListener('DOMContentLoaded', renderOrderSummary);

// Example of adding a new item (could be triggered by user action)
function addItemToOrder(name, price, quantity) {
  orderItems.push({ name, price, quantity });
  renderOrderSummary();}