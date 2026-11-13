const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");
const cartStatus = document.getElementById("cartStatus");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    productCards.forEach((card) => {
      const shouldShow = selectedCategory === "All" ||
        card.dataset.category === selectedCategory;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

let bagCount = 0;
let bagTotal = 0;

document.querySelectorAll(".quick-add").forEach((button) => {
  button.addEventListener("click", () => {
    bagCount += 1;
    bagTotal += Number(button.dataset.price);
    cartStatus.textContent = `${bagCount} item(s) in your demo bag · Rs. ${bagTotal.toLocaleString("en-PK")}`;
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

document.getElementById("newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("emailInput").value.trim();
  document.getElementById("formMessage").textContent =
    `Thanks! ${email} has been added to this demo signup.`;
  event.target.reset();
});
