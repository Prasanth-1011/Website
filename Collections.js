
var products = document.querySelectorAll('.products__container figure');
var productContainer = document.querySelector('.products__container');

// Sidebar filters
var filterShirts = document.getElementById("filters__shirts");
var filterTShirts = document.getElementById("filters__tshirts");
var filterShoes = document.getElementById("filters__shoes");

// Search filter
var searchInput = document.querySelector(".products__search");

// Color filters
var filterRed = document.getElementById("color__red");
var filterBlue = document.getElementById("color__blue");
var filterBlack = document.getElementById("color__black");
var filterWhite = document.getElementById("color__white");

// Price filter
var priceSlider = document.querySelector(".product__price");
var priceValue = document.querySelector(".price__value");

// Initialize Price Slider
priceSlider.min = 0;
priceSlider.max = 3000;
priceSlider.value = 3000;
priceValue.textContent = "Rs. " + priceSlider.value;


function filterProducts() {
    var textP = searchInput.value.toUpperCase();
    var maxPrice = parseInt(priceSlider.value);

    // Collect selected categories
    var selectedCategories = [];
    if (filterShirts.checked) selectedCategories.push("shirts");
    if (filterTShirts.checked) selectedCategories.push("tshirts");
    if (filterShoes.checked) selectedCategories.push("shoes");

    // Collect selected colors
    var selectedColors = [];
    if (filterRed.checked) selectedColors.push("color-red");
    if (filterBlue.checked) selectedColors.push("color-blue");
    if (filterBlack.checked) selectedColors.push("color-black");
    if (filterWhite.checked) selectedColors.push("color-white");


    products.forEach(function (product) {
        var productName = product.querySelector("h2").textContent.toUpperCase();
        var productTags = product.getAttribute("data-tags");

        // Price logic: Find the first <p> which contains the price (e.g. "Rs. 1,499")
        var priceElement = product.querySelector("p");
        var productPrice = 0;
        if (priceElement) {
            productPrice = parseInt(priceElement.textContent.replace(/[^0-9]/g, ''));
        }

        // Search Logic
        var matchesSearch = productName.indexOf(textP) > -1;

        // Category Logic
        var matchesCategory = false;
        if (selectedCategories.length === 0) {
            matchesCategory = true;
        } else {
            for (var i = 0; i < selectedCategories.length; i++) {
                if (productTags.includes(selectedCategories[i])) {
                    matchesCategory = true;
                    break;
                }
            }
        }

        // Color Logic
        var matchesColor = false;
        if (selectedColors.length === 0) {
            matchesColor = true;
        } else {
            for (var i = 0; i < selectedColors.length; i++) {
                if (productTags.includes(selectedColors[i])) {
                    matchesColor = true;
                    break;
                }
            }
        }

        // Price Logic
        var matchesPrice = !isNaN(productPrice) ? productPrice <= maxPrice : true;


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
