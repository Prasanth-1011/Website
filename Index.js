// Mobile Menu
const menu = document.querySelectorAll(".material-icons.menu");
menu.forEach(item => {
    item.addEventListener("click", () => {
        if (headerMobileLinks.style.left === "0px") {
            headerMobileLinks.style.left = "-100%";
        } else {
            headerMobileLinks.style.left = "0";
        }
    });
});

window.addEventListener("DOMContentLoaded", () => {
    body.setAttribute("style", "scroll-padding-top: 6rem;");
});

// Close Message
const closeMessage = document.querySelector(".align-center .disturb");
const headerMobileLinks = document.querySelector(".header__mobile__links");
const body = document.querySelector("body");

closeMessage.addEventListener("click", () => {
    headerBox.setAttribute("style", "display: none;");
    headerMobileLinks.setAttribute("style", "top: 0;");
    body.setAttribute("style", "scroll-padding-top: 3rem;");
});

// Like
const like = document.querySelectorAll("i.material-symbols-outlined");
like.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("material-icons");
        item.classList.toggle("material-symbols-outlined");
    });
});

const home = document.querySelectorAll(".header__links__home");
home.forEach(item => {
    item.addEventListener("click", () => {
        let scrollPaddingTop = body.style.scrollPaddingTop;
        body.setAttribute("style", "scroll-padding-top: 10rem;");
        setTimeout(() => {
            body.setAttribute("style", `scroll-padding-top: ${scrollPaddingTop};`)
        }, 300);
    });
});

// Header Message
const messages = [
    "Enjoy Free Delivery, Returns, And Exchanges.",
    "Signup And Get Welcome Bonus 20% On Your First Purchase.",
    "Refer Friend And Earn Discount Voucher 10%."
];

let index = 0;

setInterval(() => {
    headerMessage.textContent = messages[index];
    index = (index + 1) % messages.length;
}, 2000);

// Background Images
const sliderOne = document.querySelector(".slider__one");
const sliderTwo = document.querySelector(".slider__two");

const imagesOne = [
    "https://thumbs.dreamstime.com/b/group-portrait-happy-confident-young-people-wearing-modern-beautiful-casual-clothes-models-comfortable-pants-sneakers-t-241320075.jpg",
    "https://thumbs.dreamstime.com/b/group-smiling-friends-fashionable-jeans-young-men-women-posing-studio-fashion-people-happy-lifestyle-clothes-132357480.jpg",
    "https://muycosmopolitas.com/wp-content/uploads/2021/09/the-messi-store-moda-futbol-psg-astro-22092021-1-1024x576.jpg"
];

const imagesTwo = [
    "https://prasanth-1011.github.io/Website/Assets/Image_2102.jpg",
    "https://prasanth-1011.github.io/Website/Assets/Image_2101.jpg",
    "https://i2-prod.mirror.co.uk/article30239516.ece/ALTERNATES/s1200c/0_Barca.jpg"
];

let slideIndex = 0;

const createImage = (path, left) => {
    const image = document.createElement("img");
    image.src = path;
    image.style.left = left;
    return image;
};

const initSlider = () => {
    sliderOne.appendChild(createImage(imagesOne[0], "0"));
    sliderTwo.appendChild(createImage(imagesTwo[0], "0"));
};

initSlider();

const updateSlider = (slider, path, direction) => {
    const current = slider.querySelector("img");
    const next = createImage(path, direction === "next" ? "100%" : "-100%");

    slider.appendChild(next);
    void next.offsetWidth; // Force Reflow

    current.style.left = direction === "next" ? "-100%" : "100%";
    next.style.left = "0";

    setTimeout(() => current.remove(), 800);
};

const slide = (direction) => {
    slideIndex = (slideIndex + (direction === "next" ? 1 : -1) + imagesOne.length) % imagesOne.length;
    updateSlider(sliderOne, imagesOne[slideIndex], direction);
    updateSlider(sliderTwo, imagesTwo[slideIndex], direction);
};

// Auto Slide
let intervalTime;

const startAutoSlide = () => {
    if (intervalTime) {
        clearInterval(intervalTime);
    }
    intervalTime = setInterval(() => slide("next"), 3000);
};

startAutoSlide();

document.querySelector(".chevron_right").addEventListener("click", () => {
    slide("next");
    startAutoSlide();
});

document.querySelector(".chevron_left").addEventListener("click", () => {
    slide("previous");
    startAutoSlide();
});

// Shoes
const shoes = document.querySelectorAll(".shoe__1011, .shoe__1021, .shoe__1031");
shoes.forEach(shoe => {
    shoe.addEventListener("mouseover", changeImage);
    shoe.addEventListener("mouseout", resetImage);
});

function changeImage(event) {
    const image = event.target;
    const newImage = image.getAttribute("data-src");

    image.classList.add("blink");

    setTimeout(() => {
        image.setAttribute("src", newImage);
        image.classList.remove("blink");
    }, 400);
}

function resetImage(event) {
    const image = event.target;
    const newImage = image.getAttribute("image-src");

    image.classList.add("blink");

    setTimeout(() => {
        image.setAttribute("src", newImage);
        image.classList.remove("blink");
    }, 400);
}