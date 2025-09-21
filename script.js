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


function toggleMenu () {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Modal View functionality

const mocktail1Btn = document.getElementById("view-mocktail1")
const mocktail2Btn = document.getElementById("view-mocktail2")
const mocktail3Btn = document.getElementById("view-mocktail3")
const mocktail4Btn = document.getElementById("view-mocktail4")
const mocktail5Btn = document.getElementById("view-mocktail5")
const mocktail6Btn = document.getElementById("view-mocktail6")

const btns = [mocktail1Btn, mocktail2Btn, mocktail3Btn, mocktail4Btn, mocktail4Btn, mocktail5Btn, mocktail6Btn]

const modal = document.createElement('div')

modal.innerHTML = `<article class="card">
            <i class="fa-solid fa-x modal-x" id="close-modal"></i>
            <div class="card-media">
              <img src="https://placehold.co/600x400?text=Mocktail+1" alt="Mocktail 1" />
            </div>
            <div class="card-body">
              <h3>MockTail 1</h3>
              <p>Example: Pineapple, coconut, lime & a splash of mint.</p>
              <a href="/checkout.html" class="card-btn">Buy Now</a>
            </div>
          </article>`



const closeModal = () => {
  overlay.classList.add("overlay-hide")
  overlay.classList.remove("overlay-show")
}

const viewProductDetails = (e) => {
  e.preventDefault()
  overlay.classList.remove("overlay-hide")
  overlay.classList.add("overlay-show")
  document.getElementById("overlay").appendChild(modal)
  document.getElementById("close-modal").addEventListener("click", closeModal)
}

for (let i = 0; i < btns.length; i++){
  btns[i].addEventListener("click", viewProductDetails)
}




