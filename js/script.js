// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
document.querySelector("#search-button").onclick = (e) => {
  e.preventDefault();
  searchForm.classList.toggle("active");
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart").onclick = (e) => {
  e.preventDefault();
  shoppingCart.classList.toggle("active");
};

// Klik di luar elemen
document.addEventListener("click", function (e) {
  if (!navbarNav.contains(e.target) && !e.target.matches("#hamburger-menu")) {
    navbarNav.classList.remove("active");
  }
  if (!searchForm.contains(e.target) && !e.target.matches("#search-button")) {
    searchForm.classList.remove("active");
  }
  if (!shoppingCart.contains(e.target) && !e.target.matches("#shopping-cart")) {
    shoppingCart.classList.remove("active");
  }
});

// Modal item detail
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const closeModal = document.querySelector(".modal .close-icon");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();
    itemDetailModal.classList.add("active");
  };
});

closeModal.onclick = (e) => {
  e.preventDefault();
  itemDetailModal.classList.remove("active");
};

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.classList.remove("active");
  }
};

// Quantity increase/decrease
const quantityInput = document.querySelector("#quantity");
document.querySelector("#increase").onclick = () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
};
document.querySelector("#decrease").onclick = () => {
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
};
