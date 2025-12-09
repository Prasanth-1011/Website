window.addEventListener("DOMContentLoaded", () => {
    body.setAttribute("style", "scroll-padding-top: 6rem;");
});

window.addEventListener("click", () => {
    console.log(body.style.scrollPaddingTop);
})

// Like
const like = document.querySelectorAll("i.material-symbols-outlined");
like.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("material-icons");
        item.classList.toggle("material-symbols-outlined");
    });
});

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