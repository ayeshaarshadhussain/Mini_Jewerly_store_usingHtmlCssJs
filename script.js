const hamBurger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");

hamBurger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamBurger.classList.toggle("active");
})

const links = navLinks.querySelectorAll("a");
links.forEach( link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamBurger.classList.remove("active");
    })
})

window.addEventListener("load", () => {
    if(localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
});

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
})

/* search products */
const searchInput = document.getElementById("searchInput");
const filterBtn = document.querySelectorAll(".filter-btn");
const  productCards = document.querySelectorAll(".product-card");


filterBtn.forEach(button => {
    button.addEventListener("click", () => {

        filterBtn.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.getAttribute("data-filter");
    productCards.forEach( card => {
    const productCategory  = card.getAttribute("data-category");

    if (category === "all" || productCategory === category) {
        card.style.display = "block";
    }
    else {
        card.style.display = "none";
    }
});
    })
})
