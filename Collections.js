const products = document.querySelectorAll('.products__container figure');
const productContainer = document.querySelector('.products__container');

const filterShirts = document.getElementById("filters__shirts");
const filterTShirts = document.getElementById("filters__tshirts");
const filterShoes = document.getElementById("filters__shoes");
const searchInput = document.querySelector(".products__search");

const filterRed = document.getElementById("color__red");
const filterBlue = document.getElementById("color__blue");
const filterBlack = document.getElementById("color__black");
const filterWhite = document.getElementById("color__white");

const priceSlider = document.querySelector(".product__price");
const priceValue = document.querySelector(".price__value");
priceSlider.min = 0;
priceSlider.max = 3000;
priceSlider.value = 3000;
priceValue.textContent = "Rs. " + priceSlider.value;

function filterProducts() {
    const textPrice = searchInput.value.toUpperCase();
    const maxPrice = parseInt(priceSlider.value);

    const selectedCategories = [];
    if (filterShirts.checked) selectedCategories.push("shirts");
    if (filterTShirts.checked) selectedCategories.push("tshirts");
    if (filterShoes.checked) selectedCategories.push("shoes");

    const selectedColors = [];
    if (filterRed.checked) selectedColors.push("color-red");
    if (filterBlue.checked) selectedColors.push("color-blue");
    if (filterBlack.checked) selectedColors.push("color-black");
    if (filterWhite.checked) selectedColors.push("color-white");

    products.forEach(function (product) {
        const productName = product.querySelector("h2").textContent.toUpperCase();
        const productTags = product.getAttribute("data-tags");

        const priceElement = product.querySelector("p");
        let productPrice = 0;
        if (priceElement) {
            productPrice = parseInt(priceElement.textContent.replace(/[^0-9]/g, ''));
        }

        // Search Logic
        const matchesSearch = productName.indexOf(textPrice) > -1;

        // Category Logic
        let matchesCategory = false;
        if (selectedCategories.length === 0) {
            matchesCategory = true;
        } else {
            for (let i = 0; i < selectedCategories.length; i++) {
                if (productTags.includes(selectedCategories[i])) {
                    matchesCategory = true;
                    break;
                }
            }
        }

        // Color Logic
        let matchesColor = false;
        if (selectedColors.length === 0) {
            matchesColor = true;
        } else {
            for (let i = 0; i < selectedColors.length; i++) {
                if (productTags.includes(selectedColors[i])) {
                    matchesColor = true;
                    break;
                }
            }
        }

        // Price Logic
        const matchesPrice = !isNaN(productPrice) ? productPrice <= maxPrice : true;

        // Final Visibility
        if (matchesSearch && matchesCategory && matchesColor && matchesPrice) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// Event Listeners
searchInput.addEventListener("keyup", filterProducts);

filterShirts.addEventListener("change", filterProducts);
filterTShirts.addEventListener("change", filterProducts);
filterShoes.addEventListener("change", filterProducts);

filterRed.addEventListener("change", filterProducts);
filterBlue.addEventListener("change", filterProducts);
filterBlack.addEventListener("change", filterProducts);
filterWhite.addEventListener("change", filterProducts);

priceSlider.addEventListener("input", function () {
    priceValue.textContent = "Rs. " + this.value;
    filterProducts();
});
